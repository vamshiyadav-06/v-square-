import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

const AuthContext = createContext(null);

const emptyAuth = { user: null, role: null, profile: null };

async function loadProfile(user) {
  if (!user || !supabase) return null;

  const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single();
  if (error) throw error;
  return data;
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(emptyAuth);
  const [students, setStudents] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const applySession = async (session) => {
    if (!session?.user) {
      setAuth(emptyAuth);
      setStudents([]);
      setConsultations([]);
      return;
    }

    const profile = await loadProfile(session.user);
    setAuth({
      user: { id: session.user.id, email: session.user.email, name: profile?.full_name || session.user.email, role: profile?.role },
      role: profile?.role || null,
      profile,
    });
  };

  const loadStudents = async () => {
    if (!supabase || auth.role !== 'admin') return;

    const { data, error: queryError } = await supabase
      .from('profiles')
      .select('id, full_name, email, phone, college, course, branch, year, city, created_at')
      .eq('role', 'student')
      .order('created_at', { ascending: false });

    if (queryError) {
      setError(queryError.message);
      return;
    }

    setStudents(data || []);
  };

  const loadConsultations = async () => {
    if (!supabase || auth.role !== 'admin') return;

    const { data, error: queryError } = await supabase
      .from('consultation_requests')
      .select('id, name, phone, email, project_idea, technology, deadline, message, status, created_at')
      .order('created_at', { ascending: false });

    if (queryError) {
      setError(queryError.message);
      return;
    }

    setConsultations(data || []);
  };

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      setError('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to frontend/.env.');
      return undefined;
    }

    let mounted = true;
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!mounted) return;
      try {
        await applySession(session);
      } catch (sessionError) {
        setError(sessionError.message);
      } finally {
        setLoading(false);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      applySession(session).catch((sessionError) => setError(sessionError.message));
    });

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!supabase || auth.role !== 'admin') return undefined;

    loadStudents();
    loadConsultations();
    const channel = supabase
      .channel('admin-student-profiles')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, loadStudents)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'consultation_requests' }, loadConsultations)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [auth.role]);

  const registerStudent = async (studentData) => {
    if (!supabase) return { ok: false, message: 'Supabase is not configured.' };

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: studentData.email.trim().toLowerCase(),
      password: studentData.password,
      options: {
        data: {
          full_name: studentData.fullName,
          phone: studentData.phone,
          college: studentData.college,
          course: studentData.course,
          branch: studentData.branch,
          year: studentData.year,
          city: studentData.city,
        },
      },
    });

    if (signUpError) return { ok: false, message: signUpError.message };
    if (!data.session) {
      return { ok: true, role: 'student', requiresEmailConfirmation: true };
    }

    return { ok: true, role: 'student' };
  };

  const submitConsultation = async (requestData) => {
    if (!supabase || !auth.user) return { ok: false, message: 'Please log in before contacting V Square.' };

    const { error: requestError } = await supabase.from('consultation_requests').insert({
      student_id: auth.user.id,
      name: requestData.name,
      phone: requestData.phone,
      email: auth.user.email,
      college: requestData.college,
      project_idea: requestData.projectIdea,
      technology: requestData.technology,
      deadline: requestData.deadline,
      message: requestData.message,
    });

    if (requestError) return { ok: false, message: requestError.message };
    return { ok: true };
  };

  const login = async ({ email, password }) => {
    if (!supabase) return { ok: false, message: 'Supabase is not configured.' };

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (loginError) return { ok: false, message: loginError.message };

    try {
      const profile = await loadProfile(data.user);
      if (!profile?.role) {
        await supabase.auth.signOut();
        return { ok: false, message: 'Your account profile is not configured yet.' };
      }
      return { ok: true, role: profile.role };
    } catch (profileError) {
      await supabase.auth.signOut();
      return { ok: false, message: profileError.message };
    }
  };

  const logout = () => {
    if (supabase) supabase.auth.signOut();
    setAuth(emptyAuth);
    setStudents([]);
  };

  const value = useMemo(
    () => ({ auth, login, logout, registerStudent, submitConsultation, students, consultations, loading, error, isSupabaseConfigured }),
    [auth, students, consultations, loading, error],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}

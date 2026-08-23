import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  college: '',
  course: '',
  branch: '',
  year: '1st Year',
  city: '',
};

function RegisterPage() {
  const navigate = useNavigate();
  const { registerStudent } = useAuth();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ['fullName', 'email', 'phone', 'password', 'college', 'course', 'branch', 'year', 'city'];
    const missing = requiredFields.some((field) => !String(form[field]).trim());

    if (missing) {
      setError('Please fill in all required fields.');
      setSuccess('');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      setSuccess('');
      return;
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setSuccess('');
      return;
    }

    setSubmitting(true);
    try {
      const result = await registerStudent(form);
      if (!result.ok) {
        setError(result.message);
        setSuccess('');
        return;
      }

      setError('');
      if (result.requiresEmailConfirmation) {
        setSuccess('Registration successful. Check your email to confirm your account, then log in.');
      } else {
        setSuccess('Registration successful. You are now logged in.');
        navigate('/dashboard');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Student registration</div>
          <h2>Create your student account</h2>
        </div>
        <div className="form-shell">
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Full Name</label>
              <input name="fullName" type="text" value={form.fullName} onChange={handleChange} placeholder="Your full name" />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="name@college.edu" />
            </div>
            <div className="form-field">
              <label>Phone Number</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="9876543210" />
            </div>
            <div className="form-field">
              <label>Password</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Strong password" />
            </div>
            <div className="form-field">
              <label>College Name</label>
              <input name="college" type="text" value={form.college} onChange={handleChange} placeholder="College or university" />
            </div>
            <div className="form-field">
              <label>Course</label>
              <input name="course" type="text" value={form.course} onChange={handleChange} placeholder="B.Tech, M.Tech, Diploma" />
            </div>
            <div className="form-field">
              <label>Branch</label>
              <input name="branch" type="text" value={form.branch} onChange={handleChange} placeholder="Computer Science" />
            </div>
            <div className="form-field">
              <label>Year</label>
              <select name="year" value={form.year} onChange={handleChange}>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
                <option>M.Tech</option>
                <option>Diploma</option>
              </select>
            </div>
            <div className="form-field full">
              <label>City</label>
              <input name="city" type="text" value={form.city} onChange={handleChange} placeholder="Your city" />
            </div>
            <div className="full">
              <button className="btn btn-primary" type="submit" disabled={submitting}>
                {submitting ? 'Creating account...' : 'Register'}
              </button>
            </div>
          </form>
          {error && <div className="notice" style={{ color: '#fca5a5' }}>{error}</div>}
          {success && <div className="notice" style={{ color: '#86efac' }}>{success}</div>}
          <div className="notice" style={{ marginTop: 12 }}>
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;

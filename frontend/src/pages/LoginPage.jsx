import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(form);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    setError('');
    if (result.role === 'admin') {
      navigate('/admin');
      return;
    }

    navigate('/dashboard');
  };

  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Student & admin portal</div>
          <h2>Login</h2>
        </div>
        <div className="form-shell">
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-field full">
              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="student@example.com" />
            </div>
            <div className="form-field full">
              <label>Password</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter your password" />
            </div>
            <div className="full">
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
          </form>

          {error && <div className="notice" style={{ color: '#fca5a5' }}>{error}</div>}

          <div className="notice" style={{ marginTop: 18 }}>
            Admin access is limited to the secure V Square console account.
          </div>
          <div className="notice" style={{ marginTop: 12 }}>
            New student? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const initialForm = { name: '', phone: '', college: '', projectIdea: '', technology: '', deadline: '', message: '' };

function ContactPage() {
  const { auth, loading, submitConsultation } = useAuth();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  if (loading) {
    return <section className="page-hero"><div className="container"><div className="notice">Checking your account...</div></div></section>;
  }

  if (!auth.user || auth.role !== 'student') {
    return (
      <section className="page-hero">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Student consultation</div>
            <h1>Login first to contact V Square</h1>
          </div>
          <div className="form-shell">
            <div className="notice">Only registered students can send a consultation request. Login if you already have an account, or register to continue.</div>
            <div className="hero-actions" style={{ marginTop: 20 }}>
              <Link to="/login" className="btn btn-primary">Login</Link>
              <Link to="/register" className="btn btn-secondary">Register</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const result = await submitConsultation(form);
    setSubmitting(false);

    if (!result.ok) {
      setStatus({ type: 'error', message: result.message });
      return;
    }

    setForm(initialForm);
    setStatus({ type: 'success', message: 'Your consultation request has been sent.' });
  };

  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Contact</div>
          <h1>Get free project consultation</h1>
        </div>
        <div className="form-shell">
          <div className="notice" style={{ marginBottom: 18 }}>Signed in as {auth.user.email}</div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Name</label>
              <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label>Phone</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Your phone number" required />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" value={auth.user.email} readOnly />
            </div>
            <div className="form-field">
              <label>College</label>
              <input name="college" type="text" value={form.college} onChange={handleChange} placeholder="College name" required />
            </div>
            <div className="form-field">
              <label>Project Idea</label>
              <input name="projectIdea" type="text" value={form.projectIdea} onChange={handleChange} placeholder="Your idea" required />
            </div>
            <div className="form-field">
              <label>Technology</label>
              <input name="technology" type="text" value={form.technology} onChange={handleChange} placeholder="React, Python, AI, etc." />
            </div>
            <div className="form-field">
              <label>Deadline</label>
              <input name="deadline" type="text" value={form.deadline} onChange={handleChange} placeholder="e.g. 2 weeks" />
            </div>
            <div className="form-field full">
              <label>Message</label>
              <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Tell us more about your requirement" required></textarea>
            </div>
            <div className="full">
              <button className="btn btn-primary" type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Submit Consultation Request'}
              </button>
            </div>
          </form>
          {status.message && <div className="notice" style={{ color: status.type === 'error' ? '#fca5a5' : '#86efac' }}>{status.message}</div>}
        </div>
      </div>
    </section>
  );
}

export default ContactPage;

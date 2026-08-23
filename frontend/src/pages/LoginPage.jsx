function LoginPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Student portal</div>
          <h2>Login</h2>
        </div>
        <div className="form-shell">
          <form className="form-grid">
            <div className="form-field full">
              <label>Email</label>
              <input type="email" placeholder="student@example.com" />
            </div>
            <div className="form-field full">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="full">
              <button className="btn btn-primary" type="button">Login</button>
            </div>
          </form>
          <div className="notice">Supabase Auth integration can be connected here for secure student session management.</div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;

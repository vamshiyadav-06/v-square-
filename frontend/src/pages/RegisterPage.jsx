function RegisterPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Student registration</div>
          <h2>Create your student account</h2>
        </div>
        <div className="form-shell">
          <form className="form-grid">
            <div className="form-field">
              <label>Full Name</label>
              <input type="text" placeholder="Your full name" />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" placeholder="name@college.edu" />
            </div>
            <div className="form-field">
              <label>Phone Number</label>
              <input type="tel" placeholder="9876543210" />
            </div>
            <div className="form-field">
              <label>Password</label>
              <input type="password" placeholder="Strong password" />
            </div>
            <div className="form-field">
              <label>College Name</label>
              <input type="text" placeholder="College or university" />
            </div>
            <div className="form-field">
              <label>Course</label>
              <input type="text" placeholder="B.Tech, M.Tech, Diploma" />
            </div>
            <div className="form-field">
              <label>Branch</label>
              <input type="text" placeholder="Computer Science" />
            </div>
            <div className="form-field">
              <label>Year</label>
              <select>
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
              <input type="text" placeholder="Your city" />
            </div>
            <div className="full">
              <button className="btn btn-primary" type="button">Register</button>
            </div>
          </form>
          <div className="notice">This registration experience is designed to integrate with Supabase Auth and secure profile creation.</div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;

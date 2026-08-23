function ProfilePage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Student profile</div>
          <h1>Manage your academic profile</h1>
        </div>
        <div className="form-shell">
          <form className="form-grid">
            <div className="form-field">
              <label>Name</label>
              <input type="text" value="Student Name" />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" value="student@example.com" />
            </div>
            <div className="form-field">
              <label>Phone</label>
              <input type="tel" value="9876543210" />
            </div>
            <div className="form-field">
              <label>College</label>
              <input type="text" value="Sample College" />
            </div>
            <div className="form-field">
              <label>Course</label>
              <input type="text" value="B.Tech" />
            </div>
            <div className="form-field">
              <label>Branch</label>
              <input type="text" value="Computer Science" />
            </div>
            <div className="form-field">
              <label>Year</label>
              <input type="text" value="4th Year" />
            </div>
            <div className="form-field">
              <label>City</label>
              <input type="text" value="Hyderabad" />
            </div>
            <div className="full">
              <button className="btn btn-primary" type="button">Update Profile</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;

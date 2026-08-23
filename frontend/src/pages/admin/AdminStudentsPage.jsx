function AdminStudentsPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Admin</div>
          <h1>Student management</h1>
        </div>
        <div className="table-card">
          <div className="table-header">
            <strong>Students</strong>
          </div>
          <div className="table-body">
            <table className="simple-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Riya</td><td>riya@example.com</td><td>B.Tech</td><td>Hyderabad</td></tr>
                <tr><td>Arjun</td><td>arjun@example.com</td><td>M.Tech</td><td>Chennai</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminStudentsPage;

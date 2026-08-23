function AdminMessagesPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Admin</div>
          <h1>Messages and consultation requests</h1>
        </div>
        <div className="table-card">
          <div className="table-header">
            <strong>Messages</strong>
          </div>
          <div className="table-body">
            <table className="simple-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Neha</td><td>9876543210</td><td>Need a career guidance AI dashboard.</td><td><span className="badge warning">New</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminMessagesPage;

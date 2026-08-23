function AdminProjectsPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Admin</div>
          <h1>Project management</h1>
        </div>
        <div className="table-card">
          <div className="table-header">
            <strong>Projects</strong>
          </div>
          <div className="table-body">
            <table className="simple-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>AI Study Assistant</td><td><span className="badge warning">Development</span></td><td>60%</td><td>₹6,000</td></tr>
                <tr><td>Campus Portal</td><td><span className="badge success">Completed</span></td><td>100%</td><td>₹5,000</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminProjectsPage;

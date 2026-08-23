function AdminReferralsPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Admin</div>
          <h1>Referral management</h1>
        </div>
        <div className="table-card">
          <div className="table-header">
            <strong>Referral records</strong>
          </div>
          <div className="table-body">
            <table className="simple-table">
              <thead>
                <tr>
                  <th>Referrer</th>
                  <th>Student</th>
                  <th>Status</th>
                  <th>Reward</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Riya</td><td>Meghana</td><td><span className="badge success">Successful</span></td><td>₹200</td></tr>
                <tr><td>Arjun</td><td>Sam</td><td><span className="badge neutral">Pending</span></td><td>₹200</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminReferralsPage;

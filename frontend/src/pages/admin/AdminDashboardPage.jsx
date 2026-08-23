const cards = [
  { label: 'Total Students', value: '126' },
  { label: 'New Requests', value: '08' },
  { label: 'Active Projects', value: '42' },
  { label: 'Completed Projects', value: '31' },
  { label: 'Pending Payments', value: '06' },
  { label: 'Total Referrals', value: '28' },
];

function AdminDashboardPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Admin dashboard</div>
          <h1>Operations overview</h1>
        </div>

        <div className="stat-grid">
          {cards.map((card) => (
            <div key={card.label} className="stat-box">
              <span className="label">{card.label}</span>
              <strong>{card.value}</strong>
            </div>
          ))}
        </div>

        <div className="table-card">
          <div className="table-header">
            <strong>Recent project requests</strong>
          </div>
          <div className="table-body">
            <table className="simple-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Project</th>
                  <th>Status</th>
                  <th>Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Riya</td><td>AI Feedback System</td><td><span className="badge warning">New Request</span></td><td>₹6,000</td></tr>
                <tr><td>Arjun</td><td>Smart Inventory</td><td><span className="badge neutral">Development</span></td><td>₹5,000</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboardPage;

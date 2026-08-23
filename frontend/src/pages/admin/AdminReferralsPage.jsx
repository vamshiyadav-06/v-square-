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
            <p style={{ margin: 0, color: '#dfe7ef' }}>No referral records are available yet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminReferralsPage;

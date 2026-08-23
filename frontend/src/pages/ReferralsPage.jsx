function ReferralsPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Referrals</div>
          <h1>Your referral performance</h1>
        </div>
        <div className="stat-grid">
          <div className="stat-box"><span className="label">Referral Code</span><strong>VSQ8K42</strong></div>
          <div className="stat-box"><span className="label">Successful Referrals</span><strong>03</strong></div>
          <div className="stat-box"><span className="label">Pending Referrals</span><strong>01</strong></div>
          <div className="stat-box"><span className="label">Total Earnings</span><strong>₹200</strong></div>
        </div>
      </div>
    </section>
  );
}

export default ReferralsPage;

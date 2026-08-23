function ReferralPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Refer & Earn</div>
          <h1>Invite students and earn rewards.</h1>
        </div>
        <div className="form-shell">
          <div className="card-grid">
            <div className="feature-card">
              <h3>Referral Code</h3>
              <p style={{ fontSize: 32, letterSpacing: '0.12em', color: '#facc15', marginTop: 12 }}>VSQ8K42</p>
            </div>
            <div className="feature-card">
              <h3>Reward</h3>
              <p style={{ fontSize: 30, color: '#facc15', marginTop: 12 }}>₹200</p>
              <p>Per successful referral after admin confirmation.</p>
            </div>
          </div>
          <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <button className="btn btn-primary">COPY REFERRAL LINK</button>
            <button className="btn btn-secondary">SHARE ON WHATSAPP</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReferralPage;

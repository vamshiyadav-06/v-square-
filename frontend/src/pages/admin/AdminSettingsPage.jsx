function AdminSettingsPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Admin</div>
          <h1>Settings</h1>
        </div>
        <div className="form-shell">
          <div className="form-grid">
            <div className="form-field full">
              <label>Platform Name</label>
              <input type="text" value="V SQUARE" />
            </div>
            <div className="form-field full">
              <label>Support Email</label>
              <input type="email" value="v2squareconsole@gmail.com" />
            </div>
            <div className="full">
              <button className="btn btn-primary" type="button">Save Settings</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminSettingsPage;

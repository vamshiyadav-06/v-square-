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
            <p style={{ margin: 0, color: '#dfe7ef' }}>No project records are available yet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminProjectsPage;

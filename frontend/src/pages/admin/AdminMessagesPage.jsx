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
            <p style={{ margin: 0, color: '#dfe7ef' }}>No consultation messages are available yet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminMessagesPage;

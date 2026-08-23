function ProjectDetailPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Project details</div>
          <h1>AI Study Assistant</h1>
        </div>

        <div className="form-shell">
          <div className="card-grid">
            <div className="feature-card">
              <h3>Overview</h3>
              <p>Project title: AI Study Assistant</p>
              <p>Technology: FastAPI + React + RAG</p>
              <p>Price: ₹6,000</p>
              <p>Status: Development</p>
              <p>Progress: 60%</p>
              <p>Deadline: 2026-09-10</p>
            </div>
            <div className="feature-card">
              <h3>Timeline</h3>
              <ul style={{ display: 'grid', gap: 10, color: '#e5e7eb', paddingLeft: 18 }}>
                <li>Requirement Received</li>
                <li>Requirement Confirmation</li>
                <li>Development</li>
                <li>Testing</li>
                <li>Documentation</li>
                <li>PPT</li>
                <li>Deployment</li>
                <li>Completed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailPage;

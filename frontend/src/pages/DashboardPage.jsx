const stats = [
  { label: 'Total Projects', value: '04' },
  { label: 'Active Projects', value: '02' },
  { label: 'Completed Projects', value: '02' },
  { label: 'Referral Earnings', value: '₹200' },
];

const projects = [
  { name: 'AI Study Assistant', type: 'AI/ML', price: '₹6,000', status: 'Development', progress: 60, deadline: '2026-09-10' },
  { name: 'Campus Portal', type: 'Web Development', price: '₹5,000', status: 'Documentation', progress: 80, deadline: '2026-09-18' },
];

function DashboardPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Student dashboard</div>
          <h1>Welcome, Student</h1>
        </div>

        <div className="stat-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-box">
              <span className="label">{s.label}</span>
              <strong>{s.value}</strong>
            </div>
          ))}
        </div>

        <div className="list-grid">
          {projects.map((project) => (
            <div key={project.name} className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <div>
                  <h3 style={{ margin: '0 0 8px' }}>{project.name}</h3>
                  <div style={{ color: '#dfe7ef' }}>Project Type: {project.type}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="badge success">{project.status}</div>
                  <div style={{ marginTop: 12, fontWeight: 700 }}>{project.price}</div>
                </div>
              </div>

              <div style={{ marginTop: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>Progress</span>
                  <strong>{project.progress}%</strong>
                </div>
                <div className="progress-bar"><span style={{ width: `${project.progress}%` }} /></div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#dfe7ef', marginTop: 18, flexWrap: 'wrap', gap: 12 }}>
                <span>Created Date: 2026-08-10</span>
                <span>Deadline: {project.deadline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;

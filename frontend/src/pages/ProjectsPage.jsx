const sampleProjects = [
  { title: 'Smart Attendance System', category: 'Final Year Project', technologies: 'React + FastAPI + PostgreSQL', status: 'Completed', deployment: 'Live Demo' },
  { title: 'AI Career Guidance Bot', category: 'AI/ML', technologies: 'Python + RAG + Streamlit', status: 'In Progress', deployment: 'Prototype' },
  { title: 'Student Portfolio Platform', category: 'Web Development', technologies: 'React + Supabase', status: 'Completed', deployment: 'Deployed' },
];

function ProjectsPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Project portfolio</div>
          <h1>Completed and in-progress student projects.</h1>
        </div>
        <div className="portfolio-grid">
          {sampleProjects.map((project) => (
            <div key={project.title} className="portfolio-card">
              <div className="badge neutral" style={{ marginBottom: 12 }}>{project.category}</div>
              <h3>{project.title}</h3>
              <div style={{ color: '#dfe7ef', display: 'grid', gap: 8, marginTop: 18 }}>
                <div><strong>Technologies:</strong> {project.technologies}</div>
                <div><strong>Status:</strong> {project.status}</div>
                <div><strong>Deployment:</strong> {project.deployment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;

const services = [
  'Full-Stack Development',
  'AI-Integrated Systems',
  'Project Documentation',
  'Professional PPT Design',
  'Mentoring & Explanation',
  'Testing & Debugging',
  'Deployment Support',
  'Academic Guidance'
];

function ServicesPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Our services</div>
          <h1>End-to-end support for student project success.</h1>
        </div>
        <div className="feature-grid">
          {services.map((service) => (
            <div key={service} className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>{service}</h3>
              <p>Structured support built for clarity, quality, academic alignment, and real-world execution.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;

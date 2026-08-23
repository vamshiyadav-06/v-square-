const steps = [
  'Share your project idea or academic requirement.',
  'Discuss scope, technologies, timeline, and budget.',
  'Build the project and include documentation, PPT, and guidance.',
  'Review progress, testing, delivery, and deployment support.',
  'Receive a ready-to-present and explainable project package.'
];

function HowItWorksPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">How it works</div>
          <h1>A simple workflow from idea to delivery.</h1>
        </div>
        <div className="feature-grid">
          {steps.map((step, index) => (
            <div key={step} className="feature-card">
              <div className="feature-icon">0{index + 1}</div>
              <h3>Step {index + 1}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksPage;

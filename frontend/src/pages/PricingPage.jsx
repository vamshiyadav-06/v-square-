const plans = [
  { name: 'Full Stack Project', price: '₹5,000', description: 'Complete project according to student requirements.' },
  { name: 'Fully Deployed Project', price: '₹6,000', description: 'Complete development + live deployment.' },
  { name: 'Documentation + PPT', price: '₹2,500', description: 'Report and presentation support for existing projects.' },
];

function PricingPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Pricing</div>
          <h1>Clear project packages for academic success.</h1>
        </div>
        <div className="feature-grid">
          {plans.map((plan) => (
            <div key={plan.name} className="feature-card">
              <div className="badge warning">{plan.name}</div>
              <h3 style={{ marginTop: 18 }}>{plan.price}</h3>
              <p>{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPage;

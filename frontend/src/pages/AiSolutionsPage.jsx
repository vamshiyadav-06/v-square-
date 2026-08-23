const solutions = ['AI Chatbots', 'AI Agents', 'RAG Applications', 'Recommendation Systems', 'AI Automation', 'Data Analysis', 'Computer Vision', 'Custom AI Solutions'];

function AiSolutionsPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">AI-integrated systems</div>
          <h1>Smart systems tailored to academic and project needs.</h1>
        </div>
        <div className="feature-grid">
          {solutions.map((item) => (
            <div key={item} className="feature-card">
              <div className="feature-icon">✦</div>
              <h3>{item}</h3>
              <p>Designed for practical use cases, AI workflows, and smooth student understanding.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AiSolutionsPage;

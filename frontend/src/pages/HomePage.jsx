import { ArrowRight, Sparkles, BrainCircuit, Code2, FileText, Rocket, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const featureCards = [
  { icon: Code2, title: 'Complete Full-Stack Project', text: 'End-to-end development aligned with your academic and technical requirements.' },
  { icon: FileText, title: 'Detailed Project Documentation', text: 'Professional documentation, architecture notes, flow diagrams, and report-ready files.' },
  { icon: Sparkles, title: 'Professional PPT Presentation', text: 'Clean, persuasive deck content built to explain your project confidently.' },
  { icon: BrainCircuit, title: 'Project Explanation & Guidance', text: 'Mentoring support so the work is understandable and presentable.' },
  { icon: ShieldCheck, title: 'Testing & Bug Fixing', text: 'Quality validation, issue fixing, and functionality verification before submission.' },
  { icon: Rocket, title: 'Deployment & Support', text: 'Launch-ready delivery with setup guidance and post-launch support.' },
];

const technologies = ['Python', 'Django', 'FastAPI', 'React', 'Node.js', 'JavaScript', 'Java', 'Spring Boot', 'MySQL', 'MongoDB', 'AI/ML'];

const portfolio = [
  { title: 'AI Study Assistant', category: 'AI/ML', tech: 'FastAPI + React + RAG', description: 'Smart academic assistant for question answering and study support.', ai: 'RAG', deployment: 'Deployed' },
  { title: 'Campus Placement Hub', category: 'Web Development', tech: 'React + Django', description: 'Placement tracker and recruiter communication dashboard.', ai: 'No', deployment: 'Live Demo' },
  { title: 'Smart Inventory System', category: 'Major Project', tech: 'Spring Boot + MySQL', description: 'Inventory and analytics platform for modern operations.', ai: 'No', deployment: 'Demo Ready' },
];

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="brand-badge">Student project consultancy</div>
            <h1>
              BUILD YOUR PROJECT.
              <span className="accent">UNDERSTAND YOUR PROJECT.</span>
              PRESENT IT WITH CONFIDENCE.
            </h1>
            <p>
              Full-stack development, AI-integrated systems, documentation, PPT, deployment and technical guidance for college students.
            </p>
            <div className="hero-actions">
              <Link to="/register" className="btn btn-primary">START YOUR PROJECT</Link>
              <Link to="/contact" className="btn btn-secondary">GET FREE CONSULTATION</Link>
            </div>

            <div className="pricing-strip">
              <div className="info-card">
                <div className="label">Full Stack Project</div>
                <strong>₹5,000</strong>
                <span>Complete project according to student requirements.</span>
              </div>
              <div className="info-card">
                <div className="label">Fully Deployed Project</div>
                <strong>₹6,000</strong>
                <span>Complete development + live deployment.</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="device">
              <div className="device-screen">
                <div className="device-header">
                  <div className="dots"><span /><span /><span /></div>
                  <div style={{ color: '#d1d5db', fontSize: 12 }}>V Square</div>
                </div>
                <div className="workspace">
                  <div className="code-panel">
                    <h3>Project stack</h3>
                    <div className="badges">
                      <span>FastAPI</span>
                      <span>React</span>
                      <span>Supabase</span>
                      <span>AI</span>
                    </div>
                    <div className="badges">
                      <span>Docs</span>
                      <span>PPT</span>
                      <span>Deployment</span>
                    </div>
                  </div>
                  <div className="metrics">
                    <div className="metric-card">
                      <span>Projects</span>
                      <strong>120+</strong>
                    </div>
                    <div className="metric-card">
                      <span>AI Builds</span>
                      <strong>38</strong>
                    </div>
                    <div className="metric-card">
                      <span>Delivery</span>
                      <strong>98%</strong>
                    </div>
                    <div className="metric-card">
                      <span>Support</span>
                      <strong>24/7</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">What students get</div>
            <h2>PROJECT + DOCUMENTATION + PPT + EXPLANATION + SUPPORT</h2>
          </div>
          <div className="feature-grid">
            {featureCards.map(({ icon: Icon, title, text }) => (
              <motion.div key={title} className="feature-card" whileHover={{ y: -6 }}>
                <div className="feature-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="ai-solutions">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">AI Solutions</div>
            <h2>AI-INTEGRATED SYSTEMS</h2>
            <p>We build AI-powered systems tailored to student academic and project requirements.</p>
          </div>
          <div className="card-grid">
            <div className="ai-visual">
              <div className="circuit" />
            </div>
            <div className="feature-card" style={{ display: 'grid', alignContent: 'center' }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 16 }}>
                {['AI Chatbots', 'AI Agents', 'RAG Applications', 'Recommendation Systems', 'AI Automation', 'Data Analysis', 'Computer Vision', 'Custom AI Solutions'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#e5e7eb' }}>
                    <CheckCircle2 size={18} color="#facc15" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Technologies</div>
            <h2>Modern stack, built for student success</h2>
          </div>
          <div className="technology-grid">
            {technologies.map((item) => (
              <div key={item} className="tech-item">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Project portfolio</div>
            <h2>Sample student-ready project concepts</h2>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((item) => (
              <div key={item.title} className="portfolio-card">
                <div className="badge neutral" style={{ marginBottom: 14 }}>{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div style={{ display: 'grid', gap: 8, marginTop: 18 }}>
                  <div><strong>Technologies:</strong> {item.tech}</div>
                  <div><strong>AI Integration:</strong> {item.ai}</div>
                  <div><strong>Deployment:</strong> {item.deployment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Consultation</div>
            <h2>Talk to the team</h2>
          </div>
          <div className="form-shell">
            <div className="card-grid">
              <div className="feature-card">
                <h3>Vamshi</h3>
                <p>8074720619</p>
              </div>
              <div className="feature-card">
                <h3>Thirumal</h3>
                <p>7569382452</p>
              </div>
            </div>
            <div style={{ marginTop: 22 }}>
              <Link to="/contact" className="btn btn-primary">GET FREE PROJECT CONSULTATION <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

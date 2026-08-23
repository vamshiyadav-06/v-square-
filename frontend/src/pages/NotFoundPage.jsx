import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="page-hero">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-head">
          <div className="eyebrow">404</div>
          <h1>Page not found</h1>
          <p>The page you are trying to reach does not exist.</p>
        </div>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    </section>
  );
}

export default NotFoundPage;

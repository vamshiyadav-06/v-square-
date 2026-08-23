import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Menu, MessageCircle, Phone, Mail, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Project Portfolio' },
  { to: '/ai-solutions', label: 'AI Solutions' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/referral', label: 'Referral' },
  { to: '/contact', label: 'Contact' },
];

function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="logo-mark">V</div>
            <div>
              <div style={{ fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>V SQUARE</div>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', color: '#facc15', textTransform: 'uppercase' }}>Code. Innovate. Elevate.</div>
            </div>
          </Link>

          <nav className="nav-links">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            {auth.user ? (
              <>
                {auth.role === 'admin' ? (
                  <Link className="btn btn-secondary" to="/admin">Admin Dashboard</Link>
                ) : (
                  <Link className="btn btn-secondary" to="/contact">Project Details</Link>
                )}
                <button className="btn btn-ghost" onClick={handleLogout} type="button">
                  <LogOut size={16} style={{ marginRight: 6 }} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-secondary" to="/login">Login</Link>
                <Link className="btn btn-primary" to="/register">Register</Link>
              </>
            )}
            <button className="btn btn-ghost mobile-nav" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
              <Menu size={18} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="container" style={{ paddingBottom: 16 }}>
            <div style={{ display: 'grid', gap: 8, background: 'rgba(18,25,34,0.96)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 16 }}>
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)} style={{ padding: '10px 12px', borderRadius: 10 }}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="page-shell">
        <Outlet />
      </main>

      <div style={{ position: 'fixed', right: 18, bottom: 22, display: 'flex', gap: 12, zIndex: 100 }}>
        <a href="https://wa.me/918074720619" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 8, borderRadius: 999, padding: '0.8rem 1rem' }}>
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(13,17,24,0.9)' }}>
        <div className="container" style={{ display: 'grid', gap: 26, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', padding: '44px 0' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div className="logo-mark">V</div>
              <div><strong>V SQUARE</strong></div>
            </div>
            <p style={{ color: '#bfc8d4', margin: 0 }}>We turn student project ideas into complete, understandable and deployable software solutions.</p>
          </div>

          <div>
            <h4 style={{ marginBottom: 14 }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#bfc8d4', display: 'grid', gap: 8 }}>
              <li><Phone size={14} style={{ marginRight: 8 }} />Vamshi<br />8074720619</li>
              <li><Phone size={14} style={{ marginRight: 8 }} />Thirumal<br />7569382452</li>
              <li><Mail size={14} style={{ marginRight: 8 }} />v2squareconsole@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: 14 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#bfc8d4', display: 'grid', gap: 8 }}>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/referral">Refer & Earn</Link></li>
              <li><Link to="/contact">Get Project Consultation</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainLayout;

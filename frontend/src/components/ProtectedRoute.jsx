import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children, allowedRoles = [] }) {
  const { auth, loading } = useAuth();

  if (loading) {
    return <section className="page-hero"><div className="container"><div className="notice">Loading secure session...</div></div></section>;
  }

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(auth.role)) {
    return <Navigate to="/contact" replace />;
  }

  return children;
}

export default ProtectedRoute;

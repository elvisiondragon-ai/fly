import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { session } = useAuth();
  if (!session) {
    return <Navigate to="/auth" />;
  }
  return children;
};

export default ProtectedRoute;

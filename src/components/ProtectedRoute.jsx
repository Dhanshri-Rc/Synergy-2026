import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * Wrap private routes with this component.
 * - Redirects unauthenticated users to /login
 * - If `role` is provided, redirects users of the wrong role to their own dashboard
 */
export default function ProtectedRoute({ children, role }) {
  const { user, loading, isAuthenticated } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F8FF]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#DCE6F5] border-t-[#2563EB]" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to={user.role === "admin" ? "/admin/dashboard" : "/dashboard"} replace />;
  }

  return children;
}

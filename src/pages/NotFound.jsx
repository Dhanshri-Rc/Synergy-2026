import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-surface-light px-6">
        <div className="text-center py-20">
          <h1 className="text-7xl font-extrabold text-brand-blue">404</h1>
          <h2 className="text-2xl font-bold text-navy-900 mt-3">Page Not Found</h2>
          <p className="text-slate-500 mt-2 max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button as={Link} to="/" variant="blue" icon={false} className="mt-6">
            <HomeIcon size={16} /> Back to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

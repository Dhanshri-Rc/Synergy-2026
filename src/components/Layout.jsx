import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

export default function Layout({ children, navVariant = "light" }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar variant={navVariant} />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}

import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-dvh flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

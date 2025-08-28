import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600">© 2018 Sudhanshu Agrawal & Associates all rights reserved</p>
        <div className="flex gap-4">
          <Link to="/contact" className="hover:text-blue-700">Contact</Link>
          <Link to="/careers" className="hover:text-blue-700">Careers</Link>
          <Link to="/privacy" className="hover:text-blue-700">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

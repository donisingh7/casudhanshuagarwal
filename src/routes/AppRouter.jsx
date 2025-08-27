import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import ServicesIndex from "../pages/Services/index.jsx";
import SubmitResume from "../pages/Insights/SubmitResume.jsx";


import InsightsIndex from "../pages/Insights/Index.jsx";   
import Post from "../pages/Insights/Post.jsx";

import Careers from "../pages/Insights/Careers.jsx";
import Contact from "../pages/Insights/Contact.jsx";
import Industries from "../pages/Insights/Industries.jsx";
import Privacy from "../pages/Privacy.jsx";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServicesIndex />} />
      <Route path="/insights" element={<InsightsIndex />} />
      <Route path="/insights/:slug" element={<Post />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/submit-resume" element={<SubmitResume />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/privacy" element={<Privacy />} />



    </Routes>
  );
}

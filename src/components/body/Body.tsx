import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import Contact from "./contact/Contact";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="https://eredraug.netlify.app/gallery"
        element={<Gallery />}
      />
      <Route
        path="https://eredraug.netlify.app/contact"
        element={<Contact />}
      />
    </Routes>
  );
};

export default Body;

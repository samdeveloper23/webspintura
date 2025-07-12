import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import Contact from "./contact/Contact";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Body;

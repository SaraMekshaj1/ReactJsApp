import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { About, Category, Contact, Home, Cat, Dog, Bird, PetCare } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/cats" element={<Cat />} />
        <Route path="/category/dogs" element={<Dog />} />
        <Route path="/category/birds" element={<Bird />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="/pet-care-guide" element={<PetCare />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
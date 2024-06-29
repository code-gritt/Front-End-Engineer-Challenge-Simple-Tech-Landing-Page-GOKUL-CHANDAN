import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { useState, createContext } from "react";
import ReactSwitch from "react-switch";
import Footer from "./components/Footer/Footer";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Navbar />
        <div
          style={{
            position: "fixed",
            top: "20px",
            right:"20px",
            zIndex: "999",
            float: "left",
          }}
          className="switch"
        >
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

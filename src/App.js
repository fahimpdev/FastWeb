import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/Nav";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Price from "./Component/Price";
import About from "./Component/About";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import BlogDetails from "./Component/BlogDetails";
import Search from "./Component/Search/Search";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/price" Component={Price} />
        <Route path="/about" Component={About} />
        <Route path="/blog" Component={Blog} />
        <Route path="/blog-details/:id" Component={BlogDetails} />
        <Route path="/contact" Component={Contact} />
        <Route path="/search" Component={Search} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

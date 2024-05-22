import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Shop } from "./components/Shop";
import { Lookbook } from "./components/Lookbook";
import { Features } from "./components/Features";
import { Pages } from "./components/Pages";
import { Blog } from "./components/Blog";
import { Cards } from "./components/Cards";
import { WomenSaction } from "./components/WomanSaction";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;

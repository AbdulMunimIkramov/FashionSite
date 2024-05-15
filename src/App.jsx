import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Cards } from "./components/Cards";
import { WomenSaction } from "./components/WomanSaction";


const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <WomenSaction />
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NewToggleSw from "./NewToggleSw";
import NewClock from "./NewClock";
import ClassClock from "./ClassClock";
import NumberGuessGame from "./NumberGuessGame";

function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <NewToggleSw></NewToggleSw>
    <NumberGuessGame></NumberGuessGame>
    
    </>
  );
}

export default App;

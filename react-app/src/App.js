import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import MenuConstruction from "./pages/Menu";
import AboutConstruction from "./pages/About";

function App() {
  // useEffect(()=>{
  //   alert(`Warning! This website is fully responsive. (Powered by React-Bootstrap)`)
  // })
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reservations' element={<Reservations/>} />
        <Route path='/about' element = {<AboutConstruction/>} />
        <Route path='/menu' element = {<MenuConstruction/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

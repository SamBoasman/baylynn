import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Events from './pages/Events/Events';
import SupportUs from "./pages/SupportUs/SupportUs";
import JoinUs from "./pages/JoinUs/JoinUs";
import Gallery from "./pages/Gallery/Gallery";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/AboutUs' element={<AboutUs />}/>
      <Route path='/Events' element={<Events />}/>
      <Route path='/SupportUs' element={<SupportUs />}></Route>
      <Route path='/JoinUs' element={<JoinUs />}></Route>
      <Route path='/Gallery' element={<Gallery />}></Route>
    </Routes>
  );
}

export default App;

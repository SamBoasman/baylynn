import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/AboutUs' element={<AboutUs />}/>
      <Route path='/Events' element={<Events />}/>
    </Routes>
  );
}

export default App;

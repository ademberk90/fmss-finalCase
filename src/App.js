import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/starship/:id" element={<Detail/>} />
        {/* <Route path="*" element={<><Navbar/><Carausel/><Navigate replace to="/404"  /></>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

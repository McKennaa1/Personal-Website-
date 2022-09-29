import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home';
import Portfolios from './Portfolios';


function App() {
  return (
    <div
      className="flex flex-col md:flex-row">
      <div>
        <p> Rhose J White</p>
        <Link className="" to ="/">HOME</Link>
        <Link className="px-3 py-5" to="Portfolios">PORTFOLIOS</Link>
        <div>
          <Routes className="py-5">
            <Route path="/" element={<Home />} /> 
            <Route path="Portfolios" element={<Portfolios />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
import './App.css';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import MainPage from './Components/Homepage/Mainpage';
import NavBar from './Components/NavBar/Navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOder';
import CheckOut from './Components/CheckOut/CheckOut';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CartContextProvider from './Components/CartContext';

function App() {
  return (
    <Router>
      <div className="App">
            <CartContextProvider>
             <NavBar />
              <Routes>
                <Route path="" element={<MainPage />} />
                <Route path="/display" element={<DisplayContent />} />
                <Route path="/order/:id" element={<PlaceOrder />} />
                <Route path="/checkout" element={<CheckOut />} />
              </Routes>
            </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;

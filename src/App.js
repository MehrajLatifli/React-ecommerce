
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Product from './pages/Product';

import Basket from './pages/Basket';
// import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

<br/>
<br/>
<br/>
<br/>

        <Navbar/>
     <Routes>
      <Route path="/cart" element={< Basket/>} />
      <Route path="/product" element={< Product/>} />

      
      </Routes>

   
      
 
      </BrowserRouter>
      {/* <Slider/> */}
    </div>
  );
}

export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Home from './Page/Home';
import Contact from './Page/Contact';
import Aboutus from './Page/Aboutus';


function App() {
  return (
    <div className="">
      
      <BrowserRouter>
          <Header/>
          <Navbar/>
          
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/contact'element={<Contact/>}/>
          <Route path='/aboutus'element={<Aboutus/>}/>
        </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;

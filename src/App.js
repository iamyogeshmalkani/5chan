import logo from './logo.svg';
import './App.css';
import Login from './components/Login/login';
import Signup from './components/Login/signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
          
       
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;

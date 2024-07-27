import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='/signup' element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;

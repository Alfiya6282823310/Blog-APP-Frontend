import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/create' element={<CreatePost/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      {/* path="*" for all url nit in the list  */}
      <Route path='*' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
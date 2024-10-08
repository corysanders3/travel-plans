import plane2 from '../util/images/plane2.jpg';
import './App.css';
import Nav from '../nav/Nav';
import Home from '../home/Home';
import Form from '../form/Form';
import { useState } from 'react';

function App() {
  
  return (
    <div className='app'>
      <Nav />
      <Home />
      <Form />
    </div>
  );
}

export default App;

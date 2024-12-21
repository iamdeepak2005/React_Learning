import React, { useState } from 'react'
// import './App.css';
import {BrowserRouter,Form,Route,Routes} from 'react-router'
import GetValues from './GetValues';
// import Form from './Form';
import UseEft from './UseEft';
import Nav from './Nav';
import Timer from './Timer';
import Lifecycles from './Lifecycles';
import Weather from './Weather';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Weather/>}></Route>
        <Route path='/eft' element={<UseEft/>}></Route>
        <Route path='/timer' element={<Timer/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
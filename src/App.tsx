import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from './Components/UI/AppBar'
import HomePage from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Route path='/home' component={HomePage} exact={true} />
      <Redirect to='/home' />
    </BrowserRouter>
  );
}

export default App;

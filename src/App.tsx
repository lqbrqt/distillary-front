import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from './Components/UI/AppBar'
import HomePage from './Pages/Home'

function App() {
  return (
    <HomePage />
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import withAuthentication from './session/withAuthentication.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default withAuthentication(App);

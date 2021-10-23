import React from 'react';
import { Header } from './components/Header';
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Pages } from "./components/Pages";
import { DataProvider } from "./context/Dataprovider";
import { ShoppingCart } from './components/ShoppingCart';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <ShoppingCart />
      <Pages />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;

import React from "react";
import { NavLink } from 'react-router-dom';
import Helmet from "react-helmet";
import Header from "./elementos/Header";


function App() {

  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>
      <Header />
    </>
  );
}

export default App;


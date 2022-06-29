import React from "react";
import toast, { Toaster } from "react-hot-toast";
import FormularioGasto from "./components/FormularioGasto";

import Header from "./elementos/Header";


function App() {


  return (
    <>

      <Header helmet={"Agregar Gasto"} title="Agregar Gastos" rightbtn twobtn />
      <FormularioGasto />
    </>
  );
}

export default App;


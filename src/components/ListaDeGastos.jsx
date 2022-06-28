import React, { useContext } from "react";
import { useAuth } from "../contextos/AuthContext";
import Header from "../elementos/Header";

import { AuthContext } from "../contextos/AuthContext";

export default function ListaDeGastos() {
  const { usuario } = useAuth();
  console.log(usuario);

  return (
    <>
      <Header title={"Lista de Gastos"} btnback helmet={"Lista de Gastos"} />
    </>
  );
}

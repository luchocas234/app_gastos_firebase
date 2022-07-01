import React from "react";

import Header from "../elementos/Header";
import BarraTotalGastado from "./BarraTotalGastado";

export default function GastosPorCategoria() {
  return (
    <>
      <Header
        helmet={"Gastos Por Categoria"}
        btnback
        title={"Gastos por Categoria"}
      />
      <BarraTotalGastado />
    </>
  );
}

import React from "react";
import convertirAMoneda from "./../funciones/convertirAMoneda";
import { useTotalDelMes } from "../contextos/TotalGastadoEnElMesContext";

export default function BarraTotalGastado() {
  const { total } = useTotalDelMes();
  return (
    <div className="bg-green-500 md:text-xl text-white uppercase w-full py-3 px-4 font-semibold flex  justify-between items-center">
      <p>Total Gastado en el mes:</p>
      <p> {convertirAMoneda(total)}</p>
    </div>
  );
}

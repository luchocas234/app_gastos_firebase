import React from "react";
import convertirAMoneda from "./../funciones/convertirAMoneda";

export default function BarraTotalGastado() {
  return (
    <div className="bg-green-500 text-2xl gap-4 text-white uppercase px-20 py-4 font-semibold flex flex-col md:flex-row justify-between items-center">
      <p>Total Gastado en el mes:</p>
      <p> {convertirAMoneda(0)}</p>
    </div>
  );
}

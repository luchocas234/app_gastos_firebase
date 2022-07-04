import React, { useState } from "react";
import { ReactComponent as IconDown } from "../imagenes/down.svg";
import IconoCategoria from "./IconoCategoria";

export default function SelectCategoria({ categoria, setCategoria }) {
  const categorias = [
    { id: "comida", texto: "Comida" },
    { id: "cuentas y pagos", texto: "Cuentas y pagos" },
    { id: "hogar", texto: "Hogar" },
    { id: "transporte", texto: "Transporte" },
    { id: "ropa", texto: "Ropa" },
    { id: "salud e higiene", texto: "Salud e Higiene" },
    { id: "compras", texto: "Compras" },
    { id: "diversion", texto: "Diversion" },
  ];

  const [mostrarSelect, setMostrarSelect] = useState(false);
  const handleClick = (e) => {
    setCategoria(e.currentTarget.dataset.valor);
  };

  return (
    <>
      <div
        className="cursor-pointer rounded-md  h-full md:w-[30%] z-20   md:text-lg text-center flex  flex-col 
       "
        onClick={() => setMostrarSelect(!mostrarSelect)}
      >
        <div
          className="
          bg-slate-200 uppercase shadow-lg hover:bg-sky-200 h-full p-4 rounded-lg relative w-full flex justify-between items-center "
        >
          {categoria}
          <IconDown className="h-4" />
        </div>
        {mostrarSelect && (
          <div className="absolute z-50  top-20 w-[50%] md:w-[30%] h-[290px] overflow-auto mt-4 bg-gray-50 rounded-xl shadow-xl text-left ">
            {categorias.map((opcion) => {
              return (
                <div
                  key={opcion.id}
                  data-valor={opcion.texto}
                  onClick={handleClick}
                  className="p-2 hover:bg-gray-200 rounded-lg flex"
                >
                  <IconoCategoria nombre={opcion.texto} />
                  {opcion.texto}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

// const Opciones = styled.div`
//   background: ${theme.grisClaro};
//   position: absolute;
//   top: 5.62rem; /* 90px */
//   left: 0;
//   width: 100%;
//   border-radius: 0.625rem; /* 10px */
//   max-height: 18.75rem; /* 300px */
//   overflow-y: auto;
// `;

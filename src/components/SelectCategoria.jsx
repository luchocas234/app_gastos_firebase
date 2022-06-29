import React, { useState } from "react";
import { ReactComponent as IconDown } from "../imagenes/down.svg";

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
        className="cursor-pointer rounded-md w-[40%] h-[200px]   text-lg text-center flex  flex-col
       "
        onClick={() => setMostrarSelect(!mostrarSelect)}
      >
        <div
          className="
          bg-gray-300  shadow-lg hover:bg-gray-200 p-2 rounded-lg relative w-full flex justify-between items-center h-[40px]"
        >
          {categoria}
          <IconDown className="h-4" />
        </div>
        {mostrarSelect && (
          <div className="float-left z-50  w-full  mt-2 bg-gray-300 rounded-lg shadow-lg text-left overflow-y-auto">
            {categorias.map((opcion) => {
              return (
                <div
                  key={opcion.id}
                  data-valor={opcion.texto}
                  onClick={handleClick}
                  className="p-2 hover:bg-gray-200 rounded-lg"
                >
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

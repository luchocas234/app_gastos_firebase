import React, { useState } from "react";
import { ReactComponent as IconoPlus } from "../imagenes/plus.svg";
import SelectCategoria from "./SelectCategoria";

export default function FormularioGasto() {
  const [inputDescripcion, setInputDescripcion] = useState("");
  const [inputCantidad, setInputCantidad] = useState("");
  const [categoria, setCategoria] = useState("Hogar");

  const handleChange = (e) => {
    if (e.target.name === "desc") {
      setInputDescripcion(e.target.value);
    } else if (e.target.name === "cant") {
      setInputCantidad(e.target.value.replace(/[^0-9.]/g, ""));
    }
  };
  return (
    <>
      <form className="p-8 gap-4 h-full flex w-full flex-col justify-around relative">
        <div className="absolute h-[40px]  top-0 left-0 px-6 flex w-full justify-between z-40">
          <SelectCategoria categoria={categoria} setCategoria={setCategoria} />
          <p className="p-4 h-[40px] text-center flex items-center rounded-lg bg-red-50 z-40">
            Fechas
          </p>
        </div>
        <input
          className="b-slate-400 mt-2 uppercase font-thin  border-b-2 text-center text-2xl h-[20%] sm:text-4xl "
          type="text"
          name="desc"
          placeholder="Descripción"
          value={inputDescripcion}
          onChange={handleChange}
        />
        <input
          className="  b-slate-400 h-[30%] border-b-2 uppercase text-center text-6xl font-extrabold placeholder:text-6xl "
          type="text"
          name="cant"
          placeholder="$0.00"
          value={inputCantidad}
          onChange={handleChange}
        />
        <div className="flex justify-center m-10">
          <button
            className="btn-primary text-xl flex gap-2 items-center"
            type="submit"
          >
            Agregar Gasto
            <IconoPlus className="mx-4 fill-white w-4 h-4" />
          </button>
        </div>
      </form>
    </>
  );
}

import React, { useState } from "react";
import { Day, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { es } from "date-fns/locale";
import format from "date-fns/format";

export default function DatePicker({ fecha, setFecha }) {
  const formatFecha = (fecha = new Date()) => {
    return format(fecha, `dd 'de' MMMM 'de' yyyy`, { locale: es });
  };

  const [mostrarFecha, setMostrarFecha] = useState(false);

  return (
    <>
      <div className="rounded-md select-none w-full  max-w-[300px] z-50  flex flex-col md:text-lg text-center  justify-between">
        <div
          className="
          
          bg-slate-200 uppercase shadow-lg   cursor-pointer  hover:bg-sky-200  transition-all ease-in-out duration-150 text-center rounded-lg relative w-full flex justify-between items-center h-full p-4 md:px-6"
          onClick={() => setMostrarFecha(!mostrarFecha)}
        >
          {formatFecha(fecha)}
        </div>
        {mostrarFecha && (
          <div className="absolute top-16 right-0 active:transition-all active:delay-400 mt-4 flex  items-center transition-all ease-in-out duration-150 justify-center  rounded-lg shadow-xl bg-gray-50 mr-4  ">
            <DayPicker
              mode="single"
              className="m-2"
              selected={fecha}
              onSelect={setFecha}
              onDayClick={() => setMostrarFecha(!mostrarFecha)}
            />
          </div>
        )}
      </div>
    </>
  );
}

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
      <div className="rounded-md select-none w-[60%] max-w-[300px]   text-lg text-center flex  flex-col justify-between">
        <div
          className="
          bg-slate-200 uppercase shadow-lg  cursor-pointer hover:bg-sky-200 py-5 px-6 text-center rounded-lg relative w-full flex justify-between items-center h-[70px]"
          onClick={() => setMostrarFecha(!mostrarFecha)}
        >
          {formatFecha(fecha)}
        </div>
        {mostrarFecha && (
          <div className="active:transition-all active:delay-400 float mt-4 flex items-center justify-center rounded-lg shadow-xl bg-gray-50 mr-4 w-full ">
            <DayPicker
              mode="single"
              className="m-2"
              selected={fecha}
              onSelect={setFecha}
            />
          </div>
        )}
      </div>
    </>
  );
}

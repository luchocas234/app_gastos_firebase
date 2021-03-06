import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as IconoPlus } from "../imagenes/plus.svg";
import SelectCategoria from "./SelectCategoria";
import DatePicker from "./DatePicker";
import "react-day-picker/dist/style.css";
import agregarGasto from "../firebase/agregarGasto";
import fromUnixTime from "date-fns/fromUnixTime";
import getUnixTime from "date-fns/getUnixTime";
import { useAuth } from "./../contextos/AuthContext";
import toast from "react-hot-toast";

export default function FormularioGasto() {
  const [inputDescripcion, setInputDescripcion] = useState("");
  const [inputCantidad, setInputCantidad] = useState("");
  const [categoria, setCategoria] = useState("Hogar");
  const { usuario } = useAuth();

  const [fecha, setFecha] = useState(new Date());

  //para hacer autofocus en el formulario optimiza carga
  const inputDesc = useRef(null);
  // useEffect(() => {
  //   inputDesc && inputDesc.current.focus();
  // }, [handleSubmit]);

  const handleChange = (e) => {
    if (e.target.name === "desc") {
      setInputDescripcion(e.target.value);
    } else if (e.target.name === "cant") {
      setInputCantidad(e.target.value.replace(/[^0-9.]/g, ""));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //pasamos cantidad a numeros decimales.
    let cantidad = parseFloat(inputCantidad).toFixed(2);

    //comprobamos si hay descripción y un valor:
    if (inputDescripcion !== "" && inputCantidad !== "") {
      //guardamos en firebase toda la data más el Id del usuario que guardó la info.
      if (cantidad) {
        agregarGasto({
          categoria: categoria,
          descripcion: inputDescripcion,
          cantidad: cantidad,
          fecha: getUnixTime(fecha),
          uidUsuario: usuario.uid,
        })
          .then(() => {
            setCategoria("Hogar");
            setInputDescripcion("");
            setInputCantidad("");
            setFecha(new Date());
            toast.success("¡Gasto agregado!");
          })
          .catch((error) => {
            toast.error(
              "Hubo un problema al intentar agregar tu gasto:" + error
            );
          });
      } else {
        toast.error("El valor que ingresaste no es correcto");
      }
    } else {
      toast.error("Completa todos los valores");
    }
  };
  return (
    <>
      <form
        className=" gap-4 
        transition-all ease-linear duration-150
        p-8 min-h-[300px] h-full flex w-full flex-col justify-around relative"
        onSubmit={handleSubmit}
      >
        <div className="absolute  h-[50px] gap-4 top-0 left-0 px-6 flex  w-full justify-between z-40 ">
          <SelectCategoria categoria={categoria} setCategoria={setCategoria} />
          <DatePicker fecha={fecha} setFecha={setFecha} />
        </div>
        <input
          autoFocus
          className=" b-slate-400 mt-10 focus:mt-20 transition-all ease-linear duration-150 py-3 uppercase font-thin  border-b-2 text-center text-2xl  sm:text-4xl "
          type="text"
          name="desc"
          placeholder="Descripción"
          value={inputDescripcion}
          onChange={handleChange}
        />
        <input
          className="  b-slate-400 border-b-2 py-4 uppercase text-center text-6xl font-extrabold placeholder:text-6xl "
          type="number"
          name="cant"
          placeholder="$0.00"
          value={inputCantidad}
          onChange={handleChange}
        />
        <div className="flex justify-center mb-4 ">
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

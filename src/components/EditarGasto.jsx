import React, { useEffect, useState } from "react";
import Header from "../elementos/Header";
import BarraTotalGastado from "./BarraTotalGastado";
import SelectCategoria from "./SelectCategoria";
import DatePicker from "./DatePicker";
import "react-day-picker/dist/style.css";
import editarGasto from "../firebase/editarGasto";
import agregarGasto from "../firebase/agregarGasto";
import fromUnixTime from "date-fns/fromUnixTime";
import getUnixTime from "date-fns/getUnixTime";
import { useAuth } from "./../contextos/AuthContext";
import toast from "react-hot-toast";
import { ReactComponent as IconoPlus } from "../imagenes/plus.svg";
import { useParams } from "react-router-dom";
import useObtenerGasto from "../hooks/useObtenerGasto";
import { useNavigate } from "react-router-dom";

export default function EditarGasto() {
  const [inputDescripcion, setInputDescripcion] = useState("");
  const [inputCantidad, setInputCantidad] = useState("");
  const [categoria, setCategoria] = useState("Hogar");
  const { usuario } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [gasto] = useObtenerGasto(id);

  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    //Comprobamos si existe un gasto. De ser Así agregamos sus valores la state
    if (gasto) {
      //Comprobamos que el gasto sea del usuario actual. usamos uiD guardado en el gasto con el del usuario.
      if (gasto.data().uidUsuario === usuario.uid) {
        console.log(gasto.data());
        setCategoria(gasto.data().categoria);
        setInputCantidad(gasto.data().cantidad);
        setInputDescripcion(gasto.data().descripcion);
        setFecha(fromUnixTime(gasto.data().fecha));
      } else {
        navigate("/lista");
      }
    }
  }, [gasto, usuario, navigate]);

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
        if (gasto) {
          editarGasto({
            id: gasto.id,
            categoria: categoria,
            descripcion: inputDescripcion,
            cantidad: cantidad,
            fecha: getUnixTime(fecha),
          })
            .then(() => navigate("/lista"))
            .catch((error) => {
              console.log(error);
            });
        } else {
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
        }
      } else {
        toast.error("El valor que ingresaste no es correcto");
      }
    } else {
      toast.error("Completa todos los valores");
    }
  };
  return (
    <>
      <Header helmet={"Editar Gasto"} btnback title={"Editar Gasto"} />

      <form
        className="p-8 py-10 gap-4  h-full min-h-[500px]  flex w-full flex-col justify-around relative"
        onSubmit={handleSubmit}
      >
        <div className="absolute h-[40px]  top-0 left-0 px-6 flex w-full justify-between z-40 ">
          <SelectCategoria categoria={categoria} setCategoria={setCategoria} />
          <DatePicker fecha={fecha} setFecha={setFecha} />
        </div>
        <input
          autoFocus
          className=" b-slate-400 mt-16 uppercase font-thin  border-b-2 text-center text-2xl h-[20%] sm:text-4xl "
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
            Editar Gasto
            <IconoPlus className="mx-4 fill-white w-4 h-4" />
          </button>
        </div>
      </form>

      <BarraTotalGastado />
    </>
  );
}

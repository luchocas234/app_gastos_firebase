import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Header from "../elementos/Header";
import { ReactComponent as SvgLogin } from "../imagenes/registro.svg";
import { auth } from "../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

export default function RegistroUsuario() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPasword2] = useState("");
  const navigate = useNavigate();
  const notify = () => toast("Here is your toast.");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setCorreo(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setPasword2(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (correo === "" || password === "" || password2 === "") {
      toast.error("Complete los campos");
      console.log("complete los campos xd");
      return;
    }
    if (!expresionRegular.test(correo)) {
      toast.error("Escriba bien el correo");
      console.log("escriba bien el correo xd");
      return;
    }

    if (password !== password2) {
      toast.error("Contraseñas no coinciden");

      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, correo, password);
      toast.success("usuario registrado!");

      navigate("/");
    } catch (error) {
      let mensaje;
      switch (error.code) {
        case "auth/invalid-password":
          mensaje = "La contraseña tiene que ser de al menos 6 caracteres.";
          toast.error(mensaje);
          break;
        case "auth/email-already-in-use":
          mensaje =
            "Ya existe una cuenta con el correo electrónico proporcionado.";
          toast.error(mensaje);
          break;
        case "auth/invalid-email":
          mensaje = "El correo electrónico no es válido.";
          toast.error(mensaje);
          break;
        default:
          mensaje = "Hubo un error al intentar crear la cuenta.";
          toast.error(mensaje);
          break;
      }
    }
  };

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center">
        <Header title={"Crear cuenta"} rightbtn iniciobtn />
        <Toaster />
        <form
          onSubmit={handleSubmit}
          className="p-8  h-full flex w-full flex-col justify-around gap-4 "
        >
          <SvgLogin className=" max-h-[100px] w-full mb-5" />
          <input
            className="b-slate-400  uppercase font-thin py-8 border-b-2 text-center text-2xl sm:text-4xl"
            type="email"
            name="email"
            placeholder="Correo Electronico"
            value={correo}
            onChange={handleChange}
          />
          <input
            className="b-slate-400 py-8 border-b-2 uppercase font-thin text-center text-2xl sm:text-4xl"
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={handleChange}
          />
          <input
            className="b-slate-400 py-8 border-b-2 uppercase font-thin text-center text-2xl sm:text-4xl"
            type="password"
            name="password2"
            placeholder="Confirmar Contraseña"
            value={password2}
            onChange={handleChange}
          />
          <div className="flex justify-center ">
            <button className="btn-primary hover:bg-red-200" type="submit">
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

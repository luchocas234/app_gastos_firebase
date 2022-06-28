import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "../elementos/Header";
import { ReactComponent as SvgLogin } from "../imagenes/login.svg";
import { auth } from "../firebase/FirebaseConfig";

import { signInWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";

export default function InicioSesion() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPasword2] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setCorreo(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (correo === "" || password === "") {
      toast.error("Complete los campos");
      console.log("complete los campos xd");
      return;
    }
    if (!expresionRegular.test(correo)) {
      toast.error("Escriba bien el correo");
      console.log("escriba bien el correo xd");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, correo, password);
      toast.success("¡Inicio Sesión Exitoso!");

      navigate("/");
    } catch (error) {
      console.log(error);
      let mensaje;
      switch (error.code) {
        case "auth/wrong-password":
          mensaje = "La contraseña es incorrecta";
          toast.error(mensaje);
          break;
        case "auth/user-not-found":
          mensaje = "Este usuario no está registrado";
          toast.error(mensaje);
          break;
        default:
          toast.error("Hubo un error al iniciar sesión");
          break;
      }
    }
  };

  return (
    <>
      <Header title={"Inicio Sesion"} rightbtn regisbtn />

      <form
        onSubmit={handleSubmit}
        className="p-8  h-full flex w-full flex-col justify-around gap-4 "
      >
        <SvgLogin className=" max-h-[200px] w-full mb-5" />
        <input
          className="b-slate-400  uppercase font-thin pb-8 border-b-2 text-center text-2xl sm:text-4xl"
          type="email"
          name="email"
          placeholder="Correo Electronico"
          value={correo}
          onChange={handleChange}
        />
        <input
          className="b-slate-400 pb-8 border-b-2 uppercase font-thin text-center text-2xl sm:text-4xl"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
        />
        <div className="flex justify-center m-10">
          <button className="btn-primary" type="submit">
            Crear Cuenta
          </button>
        </div>
      </form>
      <Toaster />
    </>
  );
}

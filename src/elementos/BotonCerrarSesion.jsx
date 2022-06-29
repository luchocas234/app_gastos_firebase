import React from "react";
import { ReactComponent as IconoCerrarSesion } from "./../imagenes/log-out.svg";
import { auth } from "./../firebase/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function BotonCerrarSesion() {
  const navigate = useNavigate();
  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      toast.error("Cerró sesion");
      navigate("/iniciar-sesion");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster />
      <button className="btn-icon" onClick={cerrarSesion}>
        <IconoCerrarSesion className="fill-current  text-white h-6 w-6 " />
      </button>
    </>
  );
}

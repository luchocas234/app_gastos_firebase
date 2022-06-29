import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contextos/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const RutaProtegida = ({ children }) => {
  const { usuario } = useAuth();
  <Toaster />;
  if (usuario) {
    return children;
  } else {
    return (
      <div>
        {toast.error("URL Bloqueada, inicie sesion")}
        <Navigate replace to="/iniciar-sesion" />
      </div>
    );
  }
};

export default RutaProtegida;

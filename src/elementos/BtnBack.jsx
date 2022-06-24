import React from "react";
import { nuseNavigate } from "react-router-dom";
import { ReactComponent as IconoFlecha } from "../imagenes/flecha.svg";

export default function BtnBack() {
  const navigate = useNavigate();
  return (
    <button className="btn-icon" onClick={() => navigate(-1)}>
      <IconoFlecha className="fill-current  text-white h-6 w-6" />
    </button>
  );
}

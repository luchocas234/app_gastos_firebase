import React from "react";
import { ReactComponent as IconoComida } from "./../imagenes/cat_comida.svg";
import { ReactComponent as IconoCompras } from "./../imagenes/cat_compras.svg";
import { ReactComponent as IconoCuentasYPagos } from "./../imagenes/cat_cuentas-y-pagos.svg";
import { ReactComponent as IconoDiversion } from "./../imagenes/cat_diversion.svg";
import { ReactComponent as IconoHogar } from "./../imagenes/cat_hogar.svg";
import { ReactComponent as IconoRopa } from "./../imagenes/cat_ropa.svg";
import { ReactComponent as IconoSaludEHigiene } from "./../imagenes/cat_salud-e-higiene.svg";
import { ReactComponent as IconoTransporte } from "./../imagenes/cat_transporte.svg";

export default function IconoCategoria({ nombre }) {
  switch (nombre) {
    case "Comida":
      return <IconoComida className="rounded-xl  h-10 w-10 mr-2" />;
    case "Compras":
      return <IconoCompras className="rounded-xl  h-10 w-10 mr-2" />;
    case "Cuentas y pagos":
      return <IconoCuentasYPagos className="rounded-xl  h-10 w-10 mr-2" />;
    case "Diversion":
      return <IconoDiversion className="rounded-xl  h-10 w-10 mr-2" />;
    case "Hogar":
      return <IconoHogar className="rounded-xl  h-10 w-10 mr-2" />;
    case "Ropa":
      return <IconoRopa className=" rounded-xl h-10 w-10 mr-2" />;
    case "Salud e Higiene":
      return <IconoSaludEHigiene className=" rounded-xl h-10 w-10 mr-2" />;
    case "Transporte":
      return <IconoTransporte className=" rounded-xl h-10 w-10 mr-2" />;
    default:
      break;
  }
}

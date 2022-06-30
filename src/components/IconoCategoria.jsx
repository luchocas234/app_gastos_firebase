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
    case "comida":
      return <IconoComida className=" h-8 w-8 mr-2" />;
    case "compras":
      return <IconoCompras className=" h-8 w-8 mr-2" />;
    case "cuentas y pagos":
      return <IconoCuentasYPagos className=" h-8 w-8 mr-2" />;
    case "diversion":
      return <IconoDiversion className=" h-8 w-8 mr-2" />;
    case "hogar":
      return <IconoHogar className=" h-8 w-8 mr-2" />;
    case "ropa":
      return <IconoRopa className=" h-8 w-8 mr-2" />;
    case "salud e higiene":
      return <IconoSaludEHigiene className=" h-8 w-8 mr-2" />;
    case "transporte":
      return <IconoTransporte className=" h-8 w-8 mr-2" />;
    default:
      break;
  }
}

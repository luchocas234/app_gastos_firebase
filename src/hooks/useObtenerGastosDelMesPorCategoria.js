import React, { useEffect, useState } from 'react'
import useObtenerGastosDelMes from './useObtenerGastosDelMes'

const useObtenerGastosDelMesPorCategoria = () => {
    const [gastosPorCategoria, setGastosPorCategoria] = useState([])
    const gastos = useObtenerGastosDelMes()
    console.log(gastos)

    useEffect(() => {

        const sumaDeGastos = gastos.reduce((objetoResultante, objetoActual) => {
            const categoriaActual = objetoActual.categoria;
            const cantidadActual = objetoActual.cantidad;

            objetoResultante[categoriaActual] += cantidadActual;
            return objetoResultante;
        }, {
            'Comida': 0,
            'Cuentas y pagos': 0,
            'Hogar': 0,
            'Transporte': 0,
            'Ropa': 0,
            'Salud e Higiene': 0,
            'Compras': 0,
            'Diversion': 0,
        });
        console.log(sumaDeGastos)
        setGastosPorCategoria(Object.keys(sumaDeGastos).map((elemento) => {
            return { categoria: elemento, cantidad: sumaDeGastos[elemento] }
        }));
    }, [gastos, setGastosPorCategoria]);

    return gastosPorCategoria;




}

export default useObtenerGastosDelMesPorCategoria;

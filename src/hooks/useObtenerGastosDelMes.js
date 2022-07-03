import React, { useState, useEffect } from 'react'
import { db } from '../firebase/FirebaseConfig'
import { startOfMonth, endOfMonth, getUnixTime } from 'date-fns'
import { useAuth } from '../contextos/AuthContext'
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore'




const useObtenerGastosDelMes = () => {
    const [gastos, setGastos] = useState([])
    const { usuario } = useAuth()

    useEffect(() => {
        const inicioDeMes = getUnixTime(startOfMonth(new Date()))
        const finDeMes = getUnixTime(endOfMonth(new Date()))

        //esto es una consulta, usamos query para realizarla, luego utilizamos las demas funciones
        const consulta = query(
            collection(db, 'gastos'),
            orderBy('fecha', 'desc'),
            where('fecha', '>=', inicioDeMes),
            where('fecha', '<=', finDeMes),
            where('uidUsuario', '==', usuario.uid)
        )
        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            setGastos(snapshot.docs.map((documento) => {
                return { ...documento.data(), id: documento.id }
            }))
        }, (error) => { console.log(error) })




    }, [usuario])


    return gastos
}

export default useObtenerGastosDelMes
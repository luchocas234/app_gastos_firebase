import { useEffect, useState } from 'react'
import { useAuth } from '../contextos/AuthContext';
import { db } from './../firebase/FirebaseConfig'
import { collection, onSnapshot, query, orderBy, where, limit } from 'firebase/firestore';

export default function useObtenerGastos() {
    const [gastos, setGastos] = useState([1, 2, 3]);
    const { usuario } = useAuth();
    const [ultimoGasto, setUltimoGasto] = useState("");
    const [hayMasPorCargar, setHayMasPorCargar] = useState("")

    useEffect(() => {

        const consulta = query(
            collection(db, 'gastos'),
            where('uidUsuario', '==', usuario.uid),
            orderBy('fecha', 'desc'),
            limit(10)
        );

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            if (snapshot.docs.length > 0) {
                setUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);
                setHayMasPorCargar(true);
            }
            else {
                setHayMasPorCargar(false);
            }
            setGastos(snapshot.docs.map((gasto) => {
                return { ...gasto.data(), id: gasto.id }
            }));
        });

        return unsuscribe;

    }, [usuario]);


    return [gastos, useObtenerGastos, hayMasPorCargar];

}

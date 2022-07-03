import { db } from "../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from 'react'
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";



const useObtenerGasto = (id) => {
    const [gasto, setGasto] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        const obtenerGasto = async () => {
            const documento = await getDoc(doc(db, 'gastos', id))
            if (documento.exists) {
                setGasto(documento)
            } else {
                navigate('/lista')
            }

        }
        obtenerGasto();
    }
        , [navigate, id]);
    return [gasto]
}
export default useObtenerGasto;
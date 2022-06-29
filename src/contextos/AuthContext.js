import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

//creamos un contexto 

const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
};


const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState();

    //este Estado nos indica cuado termina de cargar "onAuthStateChanged"
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        //Queremos comprobar si hay un usuario Logueado
        const cancelarSuscripcion = onAuthStateChanged(auth, (usuario) => {
            setUsuario(usuario);
            setCargando(false);
        })
        return cancelarSuscripcion
    }, [])

    return (
        <AuthContext.Provider value={{ usuario: usuario }}>
            {!cargando && children}
        </AuthContext.Provider>


    )
}

export { AuthProvider, AuthContext, useAuth };
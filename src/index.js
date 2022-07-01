import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditarGasto from './components/EditarGasto';
import InicioSesion from "./components/InicioSesion";
import RegistroUsuario from "./components/RegistroUsuario";
import ListaDeGastos from './components/ListaDeGastos'
import GastosPorCategoria from './components/GastosPorCategoria'
import Error404 from "./components/Error404";
import Helmet from 'react-helmet'
import { AuthProvider } from './contextos/AuthContext';
import RutaPrivada from './components/RutaPrivada'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <AuthProvider>

        <BrowserRouter>


          <div className="bg-white w-[90%] m-auto max-w-[1200px] h-[95vh] lg:h-[90vh] lg:max-h-[900px] overflow-y-auto shadow-2xl rounded-lg flex flex-col justify-between relative z-20">
            <Routes>
              <Route path="*" element={<Error404 />} />
              <Route path="/iniciar-sesion" element={<InicioSesion />} />
              <Route path="/crear-cuenta" element={<RegistroUsuario />} />
              <Route path='/categorias' element={
                <RutaPrivada >
                  <GastosPorCategoria />
                </RutaPrivada>} />

              <Route path='/lista' element={
                <RutaPrivada >
                  <ListaDeGastos />
                </RutaPrivada>} />
              <Route path="/editar/:id" element={<RutaPrivada >
                <EditarGasto />
              </RutaPrivada>} />
              <Route path="/" element={
                <RutaPrivada >
                  <App />
                </RutaPrivada>
              } />


              {/* <Route path="/lista" element={<ListaDeGastos />} />
              <Route path="/categorias" element={<GastosPorCategoria />} />
              <Route path="/editar/:id" element={<EditarGasto />} />
              <Route path='/' element={<App />} /> */}

            </Routes>





          </div>

        </BrowserRouter>
      </AuthProvider>


    </React.StrictMode>
  </>
);

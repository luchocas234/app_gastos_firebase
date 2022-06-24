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



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>



    <React.StrictMode>

      <BrowserRouter>

        <div className="bg-white w-[90%] m-auto max-w-[1100px] h-[95vh] lg:h-[90vh] lg:max-h-[800px] overflow-y-auto shadow-xl rounded-lg flex flex-col justify-between relative z-20">
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/iniciar-sesion" element={<InicioSesion />} />
            <Route path="/crear-cuenta" element={<RegistroUsuario />} />
            <Route path="/lista" element={<ListaDeGastos />} />
            <Route path="/categorias" element={<GastosPorCategoria />} />
            <Route path="/editar/:id" element={<EditarGasto />} />
            <Route path='/' element={<App />} />

          </Routes>





        </div>

      </BrowserRouter>

    </React.StrictMode>
  </>
);
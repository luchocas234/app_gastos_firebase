import React from "react";

export default function Header() {
  return (
    <>
      <div className="flex w-full justify-start lg:justify-between p-10 ">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:justify-between ">
          <h1 className="uppercase text-3xl lg:text-4xl"> Agregar Gasto</h1>
          <div className="flex justify-between items-center gap-2 mb-4 lg:m-0">
            <button className="btn">Categorias</button>
            <button className="btn">Lista de Gastos</button>
          </div>
        </div>
      </div>
    </>
  );
} // const Boton = styled(Link)` // 	background: ${(props) => props.primario ? '#5B69E2' : '#000'};
// 	width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
// 	margin-left: 1.25rem; /* 20px */
// 	border: none;
// 	border-radius: 0.625rem; /* 10px */
// 	color: #fff; // 	font-family: 'Work Sans', sans-serif;
// 	height: 3.75rem; /* 60px */
// 	padding: 1.25rem 1.87rem; /* 20px 30px */
// 	font-size: 1.25rem; /* 20px */
// 	font-weight: 500;
// 	cursor: pointer;
// 	text-decoration: none;
// 	display: inline-flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	outline: none;

// 	svg {
// 		height: ${(props) => props.iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
// 		fill: white;
// 	}
// `;

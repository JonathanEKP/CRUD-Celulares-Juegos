import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BotonGeneral from "./BotonGeneral";
import { AiOutlineUserAdd } from "react-icons/ai";
import BotonEditar from "./BotonEditar";
import BotonEliminar from "./BotonEliminar";

function Tabla({ filas, campos, controlador }) {
  useEffect(() => {}, []);

  return (
    <div className="container mt-3">
      <table className="table">
        <thead>
          <td>
            <Link to={`/${controlador}/Add`}>
              <BotonGeneral>
                <AiOutlineUserAdd />
                Agregar
              </BotonGeneral>
            </Link>
          </td>
          <tr className="table-secondary">
            {campos.map((value, index) => {
              return <th key={index}>{value}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {filas.map((value, index) => {
            return (
              <tr key={index}>
                {Object.values(value).map((value2, index2) => {
                  return <td key={index2}>{value2}</td>;
                })}
                <td>
                  <Link to={`/${controlador}/Edit/${Object.values(value)[0]}`}>
                    <BotonEditar />
                  </Link>
                </td>
                <td>
                  <Link to={`/${controlador}/Delete/${Object.values(value)[0]}`}>
                    <BotonEliminar />
                    
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;

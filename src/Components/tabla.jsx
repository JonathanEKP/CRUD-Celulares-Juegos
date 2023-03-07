import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BotonGeneral from "./BotonGeneral";
import { AiOutlineUserAdd } from "react-icons/ai";
import BotonEditar from "./BotonEditar";
import BotonEliminar from "./BotonEliminar";

<<<<<<< HEAD
function Tabla({filas, campos, controlador}){
=======
function Tabla({ filas, campos, controlador }) {
  useEffect(() => {}, []);
>>>>>>> 00a677ac0a5a60e587e906327879860c0a740c22

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

<<<<<<< HEAD
    }, [])
        
    

    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
              
                        {campos.map((value, index) =>{
                           return  <th key={index}>{value}</th>

                        })}
                        <td><Link to={`/${controlador}/Add`} className="btn btn-success">NUEVO</Link></td>
                    </tr>
                </thead>
                <tbody>
                            {filas.map((value, index)=> {
                                return  <tr key={index}>
                                  
                                    {Object.values(value).map((value2, index2)=>{
                                        return <td  key={index2}>{value2}</td>

                                    })}
                                    <td>
                                        
                                        <Link className="btn btn-danger">ELIMINAR</Link>

                                    </td>

                                    </tr>
                            })}
                </tbody>
                 </table>
        </div>
    )
=======
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
>>>>>>> 00a677ac0a5a60e587e906327879860c0a740c22
}

export default Tabla;

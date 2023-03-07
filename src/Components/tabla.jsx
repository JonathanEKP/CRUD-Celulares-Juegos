import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Tabla({filas, campos}){

    useEffect(() =>{

    }, [])
        
    

    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
              
                        {campos.map((value, index) =>{
                           return  <th key={index}>{value}</th>

                        })}
                        <td><Link to="/celulares/Add" className="btn btn-success">NUEVO</Link></td>
                    </tr>
                </thead>

                <tbody>
                            {filas.map((value, index)=> {
                                return  <tr key={index}>
                                  
                                    {Object.values(value).map((value2, index2)=>{
                                        return <td  key={index2}>{value2}</td>

                                    })}
                                    <td>
                                        <Link className="btn btn-primary">EDITAR</Link>
                                        <Link className="btn btn-danger">ELIMINAR</Link>

                                    </td>

                                    </tr>
                            })}
                </tbody>

            </table>
        </div>
    )
}

export default Tabla
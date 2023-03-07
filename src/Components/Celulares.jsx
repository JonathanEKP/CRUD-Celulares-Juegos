import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Tabla from "./Tabla";

function Celulares() {
  const [celulares, setCelulares] = useState();

  useEffect(() => {
    ObtenerCelulares();
  }, []);

  async function ObtenerCelulares() {
    try {
      const res = await axios(
        "https://denny2023.azurewebsites.net/api/celulares"
      );
      const data = await res.data;
      setCelulares(data);
    } catch (error) {
      alert(error);
    }
<<<<<<< HEAD
    catch(error){
        alert(error)
    }
}
    return (
        <div>
           <Menu/>
            <h1>Celulares</h1>
            {celulares == undefined?
            <div className="spinner-border text-primary" role="status"><span></span></div>
            : <Tabla filas={celulares} controlador= "celulares" campos={["ID", "Marca", "Modelo", "Color","Precio","Descripcion","Operadora" ]} />}
       
=======
  }
  return (
    <div>
      <Menu />
      {celulares == undefined ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span>Loading...</span>
          </div>
>>>>>>> 00a677ac0a5a60e587e906327879860c0a740c22
        </div>
      ) : (
        <Tabla
          filas={celulares}
          controlador="celulares"
          campos={[
            "ID",
            "Marca",
            "Modelo",
            "Color",
            "Precio",
            "Descripcion",
            "Operadora",
            "",
            ""
          ]}
        />
      )}
    </div>
  );
}

export default Celulares;

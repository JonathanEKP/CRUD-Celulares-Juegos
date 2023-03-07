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
  }

  return (
    <div>
      <Menu />
      {celulares == undefined ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span>Loading...</span>
          </div>
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
            "",
          ]}
        />
      )}
    </div>
  );
}

export default Celulares;

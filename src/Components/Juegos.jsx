import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Tabla from "./Tabla";

function Juegos() {
  const [juegos, setJuegos] = useState();

  useEffect(() => {
    ObtenerJuegos();
  }, []);

  async function ObtenerJuegos() {
    try {
      const res = await axios(
        "https://denny2023.azurewebsites.net/api/juegos"
      );
      const data = await res.data;
      setJuegos(data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Menu />
      {juegos == undefined ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span>Loading...</span>
          </div>
        </div>
      ) : (
        <Tabla
          filas={juegos}
          controlador="juegos"
          campos={[
            "ID",
            "Titulo",
            "Descripción",
            "Plataforma",
            "Precio",
            "Categoría",
            "",
            "",
            "",
          ]}
        />
      )}
    </div>
  );
}

export default Juegos;

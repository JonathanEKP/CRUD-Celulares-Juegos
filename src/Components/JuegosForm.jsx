import React, { useEffect } from "react";
import Menu from "./Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { IoColorPaletteOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbFileDescription } from "react-icons/tb";
import { MdSignalCellular3Bar } from "react-icons/md";

function JuegosForm() {
  const [titulo, settitulo] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [plataforma, setplataforma] = useState("");
  const [precio, setprecio] = useState("");
  const [categoria, setcategoria] = useState("");
  const navigate = useNavigate();

  useEffect(() => {});
  function enviar(e) {
    e.preventDefault();
    e.stopPropagation();
    const form = document.querySelector("#formulario");
    

    if (form.checkValidity() == false) form.classList.add("was-validated");
    else {
      guardar();
    }
  }

  async function guardar() {
    try {
      const juego = {
        titulo: titulo,
        plataforma: plataforma,
        categoria: categoria,
        precio: precio,
        descripcion: descripcion
      };
      const res = await axios({
        method: "POST",
        url: "https://denny2023.azurewebsites.net/api/juegos",
        data: juego,
      });

      const data = await res.data;
      alert(data.message);
      if (data.status == 1) navigate("/juegos");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Menu />
      <h1>Agregar</h1>
      <form id="formulario" className="needs-validation" noValidate>
        <div className="form-group">
          <label className="form-label">
            <FiSmartphone />
            Titulo:
          </label>
          <input
            className="form-control"
            required
            type="text"
            value={titulo}
            onChange={(e) => settitulo(e.target.value)}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>

        <div className="form-group mt-2">
          <label className="form-label">
            <TbFileDescription />
            Descripcion:
          </label>
          <input
            className="form-control"
            required
            type="text"
            value={descripcion}
            onChange={(e) => setdescripcion(e.target.value)}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>

        <div className="form-group mt-2">
          <label className="form-label">
            <HiOutlineRectangleStack />
            Plataforma:
          </label>
          <input
            className="form-control"
            required
            type="text"
            value={plataforma}
            onChange={(e) => setplataforma(e.target.value)}a
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>

        <div className="form-group mt-2">
          <label className="form-label">
            <RiMoneyDollarCircleLine />
            Precio:
          </label>
          <input
            className="form-control"
            required
            type="text"
            value={precio}
            onChange={(e) => setprecio(e.target.value)}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>

        <div className="form-group mt-2">
          <label className="form-label">
            <IoColorPaletteOutline />
            Categoría:
          </label>
          <input
            className="form-control"
            required
            type="text"
            value={categoria}
            onChange={(e) => setcategoria(e.target.value)}
          />
        </div>

        <div className="form-group mt-2">
          <button className="btn btn-success" onClick={(e) => enviar(e)}>
            Agregar
          </button>
          <button
            className="btn btn-secondary"
            required
            onClick={() => navigate("/juegos")}
          >
            Cancelar
          </button>
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>
      </form>
    </div>
   
  );
}

export default JuegosForm;

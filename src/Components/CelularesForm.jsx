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

function CelularesForm() {
  const [marca, setmarca] = useState("");
  const [modelo, setmodelo] = useState("");
  const [color, setcolor] = useState("");
  const [precio, setprecio] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [operadora, setoperadora] = useState("");
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
      const celular = {
        marca: marca,
        modelo: modelo,
        color: color,
        precio: precio,
        descripcion: descripcion,
        operadora: operadora
      };
      const res = await axios({
        method: "POST",
        url: "https://denny2023.azurewebsites.net/api/celulares",
        data: celular,
      });

      const data = await res.data;
      alert(data.message);
      if (data.status == 1) navigate("/celulares");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Menu />
      <h1></h1>
      <form id="formulario" className="needs-validation container" noValidate>
        <div className="form-group">
          <label className="form-label">
            <FiSmartphone />
            Marca:
          </label>
          <input
            className="form-control"
            required
            type="text"
            value={marca}
            onChange={(e) => setmarca(e.target.value)}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>

        <div className="form-group mt-2">
          <label className="form-label">
            <HiOutlineRectangleStack />
            Modelo:
          </label>
          <input
            className="form-control"
            required
            type="text"
            value={modelo}
            onChange={(e) => setmodelo(e.target.value)}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>

        <div className="form-group mt-2">
          <label className="form-label">
            <IoColorPaletteOutline />
            Color:
          </label>
          <input
            className="form-control"
            required
            type="text"
            value={color}
            onChange={(e) => setcolor(e.target.value)}
          />
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
            <MdSignalCellular3Bar />
            Operadora:
          </label>
          <input
            className="form-control"
            required
            type="text"
            value={operadora}
            onChange={(e) => setoperadora(e.target.value)}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>

        <div className="form-group mt-2">
          <button className="btn btn-success" onClick={(e) => enviar(e)}>
            Guardar
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/celulares")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
   
  );
}

export default CelularesForm;

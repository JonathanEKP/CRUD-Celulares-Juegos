import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { IoColorPaletteOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbFileDescription } from "react-icons/tb";
import { MdSignalCellular3Bar } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";

function CelularesForm({ del }) {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [operadora, setOperadora] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  function enviar(e) {
    e.preventDefault();
    e.stopPropagation();
    const form = document.querySelector("#formulario");
    if (form.checkValidity() == false) form.classList.add("was-validated");
    else {
      if (id == undefined) guardar();
      else if (del != true) editar();
      else eliminar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      cargarCelular();
    }
  }, []);

  async function cargarCelular() {
    try {
      const res = await axios(
        `https://denny2023.azurewebsites.net/api/celulares/${id}`
      );
      const data = await res.data;
      //Seteamos los datos a editar en el formulario
      cargarDatosForm(data);
    } catch (error) {
      if (error.response.status === 404) {
        alert("Celular no existe");
        navigate("/celulares");
      } else {
        alert("Error: " + error);
      }
    }
  }

  function cargarDatosForm(data) {
    setMarca(data.marca);
    setModelo(data.modelo);
    setColor(data.color);
    setPrecio(data.precio);
    setDescripcion(data.descripcion);
    setOperadora(data.operadora);
  }

  async function guardar() {
    try {
      const celular = {
        marca: marca,
        modelo: modelo,
        color: color,
        precio: precio,
        descripcion: descripcion,
        operadora: operadora,
      };
      const res = await axios({
        method: "POST",
        url: "https://denny2023.azurewebsites.net/api/celulares",
        data: celular,
      });

      const data = await res.data;
      alert(data.message);
      if (data.status === 1) navigate("/celulares");
    } catch (error) {
      alert("Error: " + error);
    }
  }

  async function editar() {
    try {
      const celular = {
        celularId: id,
        marca: marca,
        modelo: modelo,
        color: color,
        precio: precio,
        descripcion: descripcion,
        operadora: operadora,
      };
      const res = await axios({
        method: "PUT",
        url: "https://denny2023.azurewebsites.net/api/celulares",
        data: celular,
      });
      const data = await res.data;
      alert(data.message);
      if (data.status === 1) navigate("/celulares");
    } catch (error) {
      alert("Error:" + error);
    }
  }

  async function eliminar() {
    try {
      const res = await axios({
        method: "DELETE",
        url: `https://denny2023.azurewebsites.net/api/celulares?id=${id}`,
      });
      const data = await res.data;
      alert(data.message);
      if (data.status === 1) navigate("/celulares");
    } catch (error) {
      if (error.response.status === 404) {
        alert("Celular no existe");
        navigate("/celulares");
      } else {
        alert("Error: " + error);
      }
    }
  }

  return (
    <div>
      <Menu />
      <h1></h1>
      <form id="formulario" className="needs-validation container" noValidate>
        {id !== undefined ? (
          <div className="form-group mt-2">
            <label className="form-label">
              <AiOutlineFieldNumber />
              Celular ID:
            </label>
            <input
              type="text"
              className="form-control"
              value={id}
              readOnly
              disabled
            />
          </div>
        ) : (
          ""
        )}
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
            disabled={del ? true : false}
            onChange={(e) => setMarca(e.target.value)}
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
            disabled={del ? true : false}
            onChange={(e) => setModelo(e.target.value)}
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
            disabled={del ? true : false}
            onChange={(e) => setColor(e.target.value)}
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
            disabled={del ? true : false}
            onChange={(e) => setPrecio(e.target.value)}
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
            disabled={del ? true : false}
            onChange={(e) => setDescripcion(e.target.value)}
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
            disabled={del ? true : false}
            onChange={(e) => setOperadora(e.target.value)}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>

        <div className="form-group mt-2">
          <button
            className={`btn btn-${
              id == undefined ? "success" : del ? "danger" : "primary"
            }`}
            onClick={(e) => enviar(e)}
          >
            {id == undefined ? "Guardar" : del ? "ELiminar" : "Editar"}
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

import React, { useEffect } from "react";
import Menu from "./Menu";
import { useState } from "react";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import {IoColorPaletteOutline} from "react-icons/io5"
import {RiMoneyDollarCircleLine} from "react-icons/ri"
import {TbFileDescription} from "react-icons/tb"
import {MdSignalCellular3Bar} from "react-icons/md"

function CelularesForm() {
  const [marca, setmarca] = useState("");
  const [modelo, setmodelo] = useState("");
  const [color, setcolor] = useState("");
  const [precio, setprecio] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [operadora, setoperadora] = useState("");

  useEffect(() => {});

  return (
    <div>
      <Menu />
      <h1>add</h1>
      <form id="formulario" className="container">
        <div className="form-group">
          <label className="form-label">
            <FiSmartphone />
            Marca:
          </label>
          <input
            className="form-control"
            type="text"
            value={marca}
            onChange={(e) => setmarca(e.target.value)}
          />

          <label className="form-label"><HiOutlineRectangleStack/>Modelo:</label>
          <input
            className="form-control"
            type="text"
            value={modelo}
            onChange={(e) => setmodelo(e.target.value)}
          />

          <label className="form-label"><IoColorPaletteOutline/>Color:</label>
          <input
            className="form-control"
            type="text"
            value={color}
            onChange={(e) => setcolor(e.target.value)}
          />

          <label className="form-label"><RiMoneyDollarCircleLine/>Precio:</label>
          <input
            className="form-control"
            type="text"
            value={precio}
            onChange={(e) => setprecio(e.target.value)}
          />

          <label className="form-label"><TbFileDescription/>Descripcion:</label>
          <input
            className="form-control"
            type="text"
            value={descripcion}
            onChange={(e) => setdescripcion(e.target.value)}
          />

          <label className="form-label"><MdSignalCellular3Bar/>Operadora:</label>
          <input
            className="form-control"
            type="text"
            value={operadora}
            onChange={(e) => setoperadora(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default CelularesForm;

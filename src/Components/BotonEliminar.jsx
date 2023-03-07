import React from "react";
import {TiDeleteOutline} from 'react-icons/ti'

function BotonEliminar() {
  return (
    <div>
      <button type="button" className="btn btn-outline-danger p-2 ">
        <div className="d-flex align-items-center">
          <TiDeleteOutline/>
          Eliminar
        </div>
      </button>
    </div>
  );
}

export default BotonEliminar;

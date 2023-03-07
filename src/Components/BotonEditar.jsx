import React from "react";
import { RiEditBoxLine } from "react-icons/ri";

function BotonEditar() {
  return (
    <button type="button" className="btn btn-outline-primary p-2 ">
      <div className="d-flex align-items-center">
        <RiEditBoxLine />
        Editar
      </div>
    </button>
  );
}

export default BotonEditar;

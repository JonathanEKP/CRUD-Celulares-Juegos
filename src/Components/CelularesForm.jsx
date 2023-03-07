import React, { useEffect } from "react";
import Menu from "./Menu/Menu";
import { useState } from "react";


function CelularesForm(){

    const [marca, setmarca] = useState("")
    const [modelo, setmodelo]= useState("")
    const [color, setcolor] = useState("")
    const [precio, setprecio] = useState("")
    const [descripcion, setdescripcion] = useState("")
    const [operadora, setoperadora] = useState("")

    useEffect(() => {
        
    })

    return(
        <div>
            <Menu />
        <h1>add</h1>
        <form id="formulario">
            <div className="form-group">
                <label className="form-label">Marca:</label>
                <input className="form-control" type="text" value={marca} onChange={(e) => setmarca(e.target.value)}/>

                <label className="form-label">Modelo:</label>
                <input className="form-control" type="text" value={modelo} onChange={(e) => setmodelo(e.target.value)}/>

                <label className="form-label">Color:</label>
                <input className="form-control" type="text" value={color} onChange={(e) => setcolor(e.target.value)}/>

                <label className="form-label">Precio:</label>
                <input className="form-control" type="text" value={precio} onChange={(e) => setprecio(e.target.value)}/>

                <label className="form-label">Descripcion:</label>
                <input className="form-control" type="text" value={descripcion} onChange={(e) => setdescripcion(e.target.value)}/>

                <label className="form-label">Operadora:</label>
                <input className="form-control"type="text" value={operadora} onChange={(e) => setoperadora(e.target.value)}/>

            </div>
        </form>
    </div>
    )
    
}

export default CelularesForm
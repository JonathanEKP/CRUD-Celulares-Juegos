import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoGameControllerSharp } from "react-icons/io5";
import { RiMoneyDollarCircleLine, RiGameLine, RiSwordFill } from "react-icons/ri";
import { TbFileDescription } from "react-icons/tb";

function JuegosForm({del}) {
  const [titulo, settitulo] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [plataforma, setplataforma] = useState("");
  const [precio, setprecio] = useState("");
  const [categoria, setcategoria] = useState("");
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() =>{
    
    if(id!=undefined)
        cargarJuegos()
},[])


  function enviar(e) {
    e.preventDefault();
    e.stopPropagation();
    const form = document.querySelector("#formulario");
    

    if (form.checkValidity() == false)
        form.classList.add("was-validated");
    else {
      if(id == undefined)
                guardar()
            else if(del != true)
                editar()
            else
                eliminar()
        }
  }

  async function cargarJuegos(){
    try{
        const res = await axios("https://denny2023.azurewebsites.net/api/juegos/"+id)
        const data = await res.data

        //console.log(data)
        settitulo(data.titulo)
        setdescripcion(data.descripcion)
        setplataforma(data.plataforma)
        setprecio(data.precio)
        setcategoria(data.categoria)
    }
    catch(error){
        if(error.response.status == 404){
            alert("Juego no existente")
            navigate("/juegos")
        }
        else
            alert(error)
        
    }
}

  async function editar(){
    try{
        const juego = {
            juegoId: id,
            titulo: titulo,
            plataforma: plataforma,
            categoria: categoria,
            precio: precio,
            descripcion: descripcion
        }

        const res = await axios({
            method: "PUT",
            url: "https://denny2023.azurewebsites.net/api/juegos",
            data: juego
        })

        const data = await res.data

        alert(data.message)
        if(data.status == 1)
            navigate("/juegos")
    }
    catch(error){
        alert(error)
    }
}

async function eliminar(){
  try{
      const res = await axios({
          method: "DELETE",
          url: "https://denny2023.azurewebsites.net/api/juegos?id="+id
      })

      const data = await res.data

      alert(data.message)
      if(data.status == 1)
          navigate("/juegos")
  }
  catch(error){
      if(error.response.status == 404){
          alert("El juego no existe")
          navigate("/juegos")
      }
      else
          alert(error)
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
      <h1>{id==undefined ? "Agregar" : del!=true ? "Editar" : "Borrar"}</h1>
      <form id="formulario" className="needs-validation" noValidate>

        <div className="form-group">
          <label className="form-label">
            <IoGameControllerSharp />
            Titulo:
          </label>
          <input
            className="form-control"
            required
            type="text"
            value={titulo}
            onChange={(e) => settitulo(e.target.value)} disabled={del==true ? true : false}
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
            onChange={(e) => setdescripcion(e.target.value)} disabled={del==true ? true : false}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>

        <div className="form-group mt-2">
          <label className="form-label">
            <RiGameLine />
            Plataforma:
          </label>
          <input
            className="form-control"
            required
            type="text"
            value={plataforma}
            onChange={(e) => setplataforma(e.target.value)} disabled={del==true ? true : false}
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
            type="number"
            value={precio}
            onChange={(e) => setprecio(e.target.value)} disabled={del==true ? true : false}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>
        
        <div className="form-group mt-2">
          <label className="form-label">
            <RiSwordFill />
            Categoría:
          </label>
          <input
            className="form-control"
            required
            type="text"
            value={categoria}
            onChange={(e) => setcategoria(e.target.value)} disabled={del==true ? true : false}
          />
        </div>

        <div className="form-group mt-2">
          <button className={`btn btn-${id == undefined ? "success" : del!=true ? "primary" : "danger"}`} onClick={(e) => enviar(e)}>{id == undefined ? "Guardar" : del!=true ? "Editar" : "Eliminar"}
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

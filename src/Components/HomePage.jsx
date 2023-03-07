import React from 'react'
import BotonEditar from './BotonEditar'
import BotonEliminar from './BotonEliminar'
import BotonGeneral from './BotonGeneral'
import Menu from './Menu'
import {AiOutlineUserAdd} from 'react-icons/ai'


function HomePage() {
  return (
    <div>
        <Menu/>
        <BotonEditar/>
        <BotonEliminar/>
        {/* Ejemplo de como usar los botones en caso de querer agregarle iconos o solo texto */}
        <BotonGeneral>Guardar</BotonGeneral>
        <BotonGeneral>
          <AiOutlineUserAdd/>
          Agregar
        </BotonGeneral>
    </div>
  )
}

export default HomePage
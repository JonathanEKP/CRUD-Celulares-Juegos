import React from 'react'

function BotonGeneral(props) {
  return (
    <button type="button" className="btn btn-success p-2 ">
      <div className="d-flex align-items-center">
        {props.children}
      </div>
    </button>
  )
}

export default BotonGeneral
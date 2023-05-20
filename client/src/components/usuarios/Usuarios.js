import React from 'react'
import MostrarUsuarios from './MostrarUsuarios'
import CrearUsuario from './CrearUsuario'

export default function Usuarios() {
  return (
    <div className="content-wrapper" style={{ minHeight: "823px" }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Empleados</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#///">Home</a></li>
                <li className="breadcrumb-item active">Empleados</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        < div className="container-fluid">
          <CrearUsuario/>
                   <div className='row d-flex justify-content-center'>
            <hr className="border border-5 rounded-pill border-dark w-75" />
          </div>

          <MostrarUsuarios/>
        </div>
      </div>
      </div>
)}

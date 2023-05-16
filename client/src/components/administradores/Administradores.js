import React from 'react'

export default function Administradores() {
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
                <li className="breadcrumb-item"><a href="#/">Home</a></li>
                <li className="breadcrumb-item active">Empleados</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        < div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-2">
              <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#ModalEmpleados">Crear Empleado</button>
              <div className="modal fade" id="ModalEmpleados" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Crear Empleado</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">

                      <form>

                        <div class="form-group">
                          <label for="userName">Nombre de usuario</label>
                          <input type="text" class="form-control" id="userName" placeholder="Nombre de Usuario" aria-describedby="userHelp" />
                          <small id="userHelp" class="form-text text-muted">El usuario tiene que ser unico.</small>
                        </div>

                        <div class="form-group">
                          <label for="name">Nombre del Empleado</label>
                          <input type="text" class="form-control" id="name" placeholder="Nombre de empleado" />
                        </div>

                        <div class="form-group">
                          <label for="Email">Direccion Email</label>
                          <input type="email" class="form-control" id="Email" placeholder="Email" aria-describedby="emailHelp" />
                          <small id="emailHelp" class="form-text text-muted">Email corporativo.</small>
                        </div>

                        <div class="form-group">
                          <label for="password">Password</label>
                          <input type="password" class="form-control" id="password" placeholder="Tu contraseña" />
                        </div>

                        <div class="form-group">
                          <label for="datePicker">Fecha de nacimiento:</label>
                          <input type="date" class="form-control" id="datePicker" name="datePicker" />
                        </div>

                        <div class="form-group">
                          <label for="Departamento">Departamento</label>
                          <select class="form-control" id="Departamento">
                            <option>IT</option>
                            <option>Compras</option>
                            <option>Facturacion</option>
                            <option>Marketing</option>
                            <option>Almacen</option>
                            <option>Trafico</option>
                            <option>At. Cliente</option>
                            <option>Recursos Humanos</option>
                          </select>
                        </div>

                        <div class="form-group">
                          <label for="Puesto">Puesto</label>
                          <select class="form-control" id="Puesto">
                            <option>Becario</option>
                            <option>Junior</option>
                            <option>Senior</option>
                            <option>Director</option>
                            <option>Gerente</option>
                          </select>
                        </div>

                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                      <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
      
          <hr className="border border-5 rounded-pill border-dark w-75" />
          </div>
        </div>
      </div>
    </div>);

}

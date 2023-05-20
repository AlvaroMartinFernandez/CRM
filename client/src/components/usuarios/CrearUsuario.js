import React, { useState, useEffect } from 'react'
import $ from 'jquery';
import { rutaAPI } from '../../config/Config';

export default function CrearUsuario() {

    /*=============================================
    Hook para capturar datos
    =============================================*/

    const [data, setData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        birthday: "",
        departament: "",
        position: ""
    });


    /*=============================================
    Hook para validar errores en la captura de datos
    =============================================*/

    const [invalidFeedBack, setinvalidFeedBack] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    /*=============================================
    OnChange
    =============================================*/

    const handleChange = e => {

        console.log("Entra en el Change");
        setData({

            ...data,
            [e.target.name]: e.target.value

        })

    }


    /*=============================================
    OnSubmit
    =============================================*/

    const handleSubmit = async e => {

        console.log("Entra en el submit");
        e.preventDefault();

        const { username, name, password, email, birthday, departament, position } = data;
        console.log(data);

        /*=============================================
        Validamos que el campo Usuario no venga vacío
        =============================================*/

        if (username === "") {

            setinvalidFeedBack(true);
            setErrorMessage("Completa este campo");
            return;

        }

        /*=============================================
        Validamos Expresión regular
        =============================================*/

        const expUsuario = /^(?=.*[A-Za-z]).{2,6}$/;

        if (!expUsuario.test(username)) {

            setinvalidFeedBack(true);
            setErrorMessage("Completa este campo correctamente");
            return;

        }

        /*=============================================
        Validamos que el campo Password no venga vacío
        =============================================*/

        if (password === "") {

            setinvalidFeedBack(true);
            setErrorMessage("Completa este campo");
            return;

        }

        /*=============================================
        Validamos Expresión regular
        =============================================*/

        const expPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

        if (!expPassword.test(password)) {
            setinvalidFeedBack(true);
            setErrorMessage("Completa este campo Correctamente");
            return;

        }

        if (name === "") {

            setinvalidFeedBack(true);
            setErrorMessage("Completa este campo");
            return;

        }

        if (email === "") {

            setinvalidFeedBack(true);
            setErrorMessage("Completa este campo");
            return;

        }

        if (birthday === "") {

            setinvalidFeedBack(true);
            setErrorMessage("Completa este campo");
            return;

        }

        if (departament === "") {

            console.log("ERROR");
            return;

        }
        if (position === "") {

            console.log("ERROR");
            return;

        }
        setinvalidFeedBack(false);
        console.log(invalidFeedBack);
        /*=============================================
        EJECTUAMOS SERVICIO POST 
        =============================================*/

        const result = await postData(data);
        console.log(result);
        if (result.status === 400) {

            setAlertMessage(result.mensaje);
            setShowModal(false);

        }

        if (result.status === 200) {

            setAlertMessage(result.mensaje);
            setShowModal(true);
            //  setTimeout(() => { window.location.href = "/"; }, 3000)

        }
    }

    useEffect(() => {
        if (showModal) {
            $('#ModalEmpleados').modal('hide');
        }
    }, [alertMessage]);


    return (
        <div className="row d-flex justify-content-center">
            <div className="col-2">
                <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#ModalEmpleados">Crear Empleado</button>
                <div className="modal fade" id="ModalEmpleados" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Crear Empleado</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <form id="crearUsuario" onChange={handleChange} >

                                    <div className="form-group">
                                        <label htmlFor="userName">Nombre de username</label>
                                        <input type="text" name="username" className="form-control" id="userName"
                                            placeholder="Nombre de Usuario"
                                            aria-describedby="userHelp"
                                            minLength="2"
                                            maxLength="6"
                                            pattern="(?=.*[A-Za-z]).{2,6}"
                                            required />
                                        <small id="userHelp" className="form-text text-muted">El username tiene que ser unico.</small>
                                        {invalidFeedBack && (
                                            <div className="invalid-feedback">
                                                {errorMessage}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">Nombre del Empleado</label>
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Nombre de empleado" require="true" />
                                        {invalidFeedBack && (
                                            <div className="invalid-feedback">
                                                {errorMessage}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="Email">Direccion Email</label>
                                        <input type="email" name="email" className="form-control" id="Email" placeholder="Email" aria-describedby="emailHelp" require="true" />
                                        <small id="emailHelp" className="form-text text-muted">Email corporativo.</small>
                                        {invalidFeedBack && (
                                            <div className="invalid-feedback">
                                                {errorMessage}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" className="form-control"
                                            id="password"
                                            placeholder="Tu contraseña"
                                            minLength="8"
                                            pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}"
                                            required />
                                        {invalidFeedBack && (
                                            <div className="invalid-feedback">
                                                {errorMessage}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="datePicker">Fecha de nacimiento:</label>
                                        <input type="date" name="birthday" className="form-control" id="datePicker" require="true" />
                                        {invalidFeedBack && (
                                            <div className="invalid-feedback">
                                                {errorMessage}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="departamento">Departamento</label>
                                        <select className="form-control" id="departamento" name="departament">
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

                                    <div className="form-group">
                                        <label htmlFor="puesto">Puesto</label>
                                        <select className="form-control" id="puesto" name="position">
                                            <option>Becario</option>
                                            <option>Junior</option>
                                            <option>Senior</option>
                                            <option>Director</option>
                                            <option>Gerente</option>
                                        </select>
                                    </div>

                                    {alertMessage && (
                                        <div className="alert alert-success">{alertMessage}</div>
                                    )}
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="sumbit" className="btn btn-primary" form="crearUsuario" onClick={handleSubmit} >Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
/*=============================================
PETICIÓN POST ADMINISTRADORES
=============================================*/

const postData = (data) => {

    const url = `${rutaAPI}/crear-usuario`;
    const token = localStorage.getItem("ACCESS_TOKEN");

    const params = {

        method: "POST",
        body: JSON.stringify(data),
        headers: {

            "Authorization": token,
            "Content-Type": "application/json"
        }

    };

    return fetch(url, params).then(response => {
        console.log(response);
        return response.json();

    }).then(result => {
        console.log(result);
        return result;

    }).catch(err => {

        return err;

    })
};
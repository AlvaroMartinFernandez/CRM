import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
//import { write } from 'xlsx';


import 'datatables.net-dt';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-responsive-dt';
import { rutaAPI } from '../../config/Config';

// Configura las fuentes de pdfMake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const HEAD = ["username", "name", "email", "password", "birthday", "departament", "position"];

export default function MostrarUsuarios() {

    const [data, setData] = useState([]);
    const tableRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usuariosPromise = dataAdministradores();
                const usuarios = await usuariosPromise;
                console.log(usuarios);
                setData(usuarios);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);



    useEffect(() => {
        const loadTable = () => {
            if (!$.fn.DataTable.isDataTable(tableRef.current)) {
                const table = $(tableRef.current).DataTable({
                    ordering: true,
                    order: [[0, 'asc']],
                    paging: true,
                    data: data.map(user => [user.username, user.name, user.email, user.password, user.birthday, user.departament, user.position]),
                    dom: `<"row d-flex justify-content-between gap-3"<"col-sm-12 col-md-8"B><"col-sm-12 col-md-2"f> <"col-sm-12 col-md-2"l>> <"row"<"col-sm-12 col-md-12"tr>>'  '<"row d-flex justify-content-start"<"col-sm-12 col-md-2"i><"col-sm-12 col-md-10"p>>`,
                    buttons: [
                        'copy',
                        'excel',
                        'csv',
                        'pdf',
                        'colvis'
                    ]
                });


                return () => {
                    table.destroy();
                };
            }
        };
        if (data.length > 0) {
            loadTable();
        }
    }, [data]);

    return (
        <div className='row d-flex justify-content-center'>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Listado de Empleados</h3>
                </div>
                <div className="card-body">
                    <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
                        <div className="row">
                            <div className="col-sm-12">
                                <table ref={tableRef} className="table table-bordered table-striped dataTable dtr-inline" aria-describedby="example1_info">
                                    <thead>
                                        <tr>
                                            {HEAD.map((column) => (
                                                <th data-orderable="true" className="sorting">{column}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((user, index) => (
                                            <tr key={user.username}>
                                                <td>{user.username}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.password}</td>
                                                <td>{user.birthday}</td>
                                                <td>{user.departament}</td>
                                                <td>{user.position}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*=============================================
    CREAMOS EL DATASET
=============================================*/
const dataAdministradores = async () => {



    const getUser = await getData();
    return getUser;



}
/*=============================================
PETICIÓN GET ADMINISTRADORES
=============================================*/

const getData = async () => {

    const url = `${rutaAPI}/mostrar-usuarios`;
    const token = localStorage.getItem("ACCESS_TOKEN");

    const params = {

        method: "GET",
        headers: {

            "Authorization": token,
            "Content-Type": "application/json"
        }

    };

    try {
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
};
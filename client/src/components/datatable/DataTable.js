import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { write } from 'xlsx';
import 'bootstrap/dist/css/bootstrap.css';

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

export default function DataTable({ head, data }) {

    const tableRef = useRef(null);

    useEffect(() => {
        const table = $(tableRef.current).DataTable({
            ordering: true,
            order: [[0, 'asc']],
            paging: true,

            dom: '<"row d-flex justify-content-between"<"col-sm-12 col-md-8"B><"col-sm-12 col-md-2"f> <"col-sm-12 col-md-2"l>>' + '<"row"<"col-sm-12 col-md-12"tr>>' + '<"row d-flex justify-content-start"<"col-sm-12 col-md-2"i><"col-sm-12 col-md-10"p>>',
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
    }, []);

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
                                            {head.map((column) => (
                                                <th data-orderable="true" className="sorting">{column}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
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

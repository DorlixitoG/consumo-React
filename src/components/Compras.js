import React from 'react';

const  Compras =({books})=> {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Compras</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Proveedor</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </tfoot>
            <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <th>{book.IdProveedor}</th>
                <td>{book.Fecha}</td>
                <td>{book.Total}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Agrega aquí la función imprimirDocumento si es necesario

export default Compras;

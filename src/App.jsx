import React, { useState } from "react";

const App = () => {


  return (
    <div className="container">
      <section className="row">
        <div className="col">
          <h1>Formulario de registro</h1>
          <p>Llená el registro para poder acceder</p>
        </div>
      </section>
      <section className="row">
        <div className="col col-md-4">
          <form >
            <div className="mb-3">
              <label>Nombre completo</label>
              <input
                type="text"
                className="form-control"
               
                name="nombre"
              />
            </div>
            <div className="mb-3">
              <label>Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                
                name="email"
              />
            </div>
            <div className="mb-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
              
                name="password"
              />
            </div>
            <div className="mb-3">
              <label>Repetir contraseña</label>
              <input
                type="password"
                className="form-control"
               
                name="re_password"
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-warning">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;

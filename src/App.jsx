import React, { useState } from "react";

const App = () => {
  // const [inputNombre, setInputNombre] = useState("");
  // const [inputEmail, setInputEmail] = useState("");
  // const [inputPassword, setInputPassword] = useState("");
  // const [inputRePassword, setInputRePassword] = useState("");

  const [inputValues, setInputValues] = useState({
    nombre: "",
    email: "",
    password: "",
    re_password: "",
  });

  const handleChange = ({ target }) => {
    setInputValues({ ...inputValues, [target.name]: target.value });
    target.classList.remove("border-danger");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
//validaciones------------------------------------
    for (let index = 0; index < e.target.elements.length; index++) {
      if (!e.target[index].value)
        e.target[index].classList.add("border-danger");
    }

    if (!inputValues.nombre || !inputValues.email) {
      return alert("Revisar los campos obligatorios");
    }
    if (inputValues.password !== inputValues.re_password) {
      return alert("Revisar las contraseñas");
    }
    //------------------------------------------------
    
    const { nombre, email, password } = inputValues;
    const registro = {
      nombre,
      email,
      password,
    };

    console.log(registro);

    //  setInputValues({ nombre: "",
    //   email: "",
    //   password: "",
    //   re_password: "",})
    // Reset form
    for (let index = 0; index < e.target.elements.length; index++) {
      e.target[index].value = "";
    }

    e.target[0].focus();
  };

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
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Nombre completo</label>
              <input
                type="text"
                className="form-control"
                value={inputValues.nombre}
                onChange={handleChange}
                name="nombre"
              />
            </div>
            <div className="mb-3">
              <label>Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                value={inputValues.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="mb-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
                value={inputValues.password}
                onChange={handleChange}
                name="password"
              />
            </div>
            <div className="mb-3">
              <label>Repetir contraseña</label>
              <input
                type="password"
                className="form-control"
                value={inputValues.re_password}
                onChange={handleChange}
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

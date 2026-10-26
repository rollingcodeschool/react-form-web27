import React, { useState } from "react";

const App = () => {
  const [inputNombre, setInputNombre]=useState("")
  const [inputEmail, setInputEmail]=useState("")
  const [inputPassword, setInputPassword]=useState("")
  const [inputRePassword, setInputRePassword]=useState("")

  const [inputValues, setInputValues]=useState({
    nombre:"",
    email:"",
    password:"",
    re_password:""
  })

// const handleChange=(e)=>{
// console.log(e.target.value)

const handleChange=(e)=>{

  setInputValues({...inputValues,[e.target.name]:e.target.value})

}



const handleSubmit=(e)=>{

  e.preventDefault()

console.log(e.target.elements)

for (let index = 0; index < e.target.elements.length -1; index++) {
  if(!e.target[index].value){
    e.target[index].classList.add("border-danger")
  }else{
    e.target[index].classList.remove("border-danger")
  }
//  console.log(e.target[index].value)
}
  // console.log({
  //   nombre:inputNombre,
  //   email:inputEmail,
  //   password:inputPassword
  // })
  // if(!inputNombre || !inputEmail || !inputPassword){
  //   return alert("Revisar los campos obligatorios")
  // }

  // if(inputPassword !== inputRePassword){
  //   return alert("Las contraseñas no coinciden")
  // }

  if(!inputValues.nombre || !inputValues.email || !inputValues.password){
    return alert("Revisar los campos obligatorios")
  }

  if(inputValues.password !== inputValues.re_password){
    return alert("Las contraseñas no coinciden")
  }

  // const user={
  //   nombre:inputNombre,
  //   email:inputEmail,
  //   password:inputPassword
  // }

  localStorage.setItem("user", JSON.stringify(inputValues))

  alert("Usuario registrado!")

}

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
              {/* <input type="text" className="form-control" name="nombre" value={inputNombre} 
           onChange={(e)=>setInputNombre(e.target.value)}
              /> */}
               <input type="text" className="form-control" name="nombre" value={inputValues.nombre} 
           onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Correo electrónico</label>
              {/* <input type="email" className="form-control" name="email" value={inputEmail}
              onChange={(e)=>setInputEmail(e.target.value)}/> */}
                <input type="email" className="form-control" name="email" value={inputValues.email}
              onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label>Contraseña</label>
              {/* <input type="password" className="form-control" name="password" value={inputPassword}
              onChange={(e)=>setInputPassword(e.target.value)}/> */}
              <input type="password" className="form-control" name="password" value={inputValues.password}
              onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label>Repetir contraseña</label>
              {/* <input
                type="password"
                className="form-control"
                name="re_password" value={inputRePassword}
                onChange={(e)=>setInputRePassword(e.target.value)}
              /> */}
               <input
                type="password"
                className="form-control"
                name="re_password" value={inputValues.re_password}
                onChange={handleChange}
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

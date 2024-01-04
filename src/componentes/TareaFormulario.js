import React, {useState} from "react";
import "../hojas-de-estilos/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

const TareaFormulario = (props) => {

  const [input, setInput] = useState("");

  const manejarCambio = e =>{
    setInput(e.target.value);
  }

  const manejarEnvio = e =>{
    e.preventDefault()

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  }

  return (
    <form className="tarea-formulario" onClick={manejarEnvio}>
      <input className="tarea-input" onChange={manejarCambio}></input>
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
};

export default TareaFormulario;

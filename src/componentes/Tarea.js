import React from "react";
import "../hojas-de-estilos/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <AiOutlineCloseCircle className="tarea-icono" />
    </div>
  );
};

export default Tarea;

import React from "react";

function TaskList(params) {
    return (
        < form id="lista">
            <h2>Lista de Tareas</h2>
            <input type="text" placeholder="Nueva tarea" />
            <button id="tarea">Agregar</button>
        </form >
    );
}

export default TaskList;
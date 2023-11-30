import React, { useState } from 'react';
import addLogo from '../assets/add.svg';

const TaskForm = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() !== '') {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <div className="agregar">
            <input
                type="text"
                value={task}
                onChange={handleInputChange}
                placeholder="Agregar una tarea"
                id='add'
            />
            <button onClick={handleAddTask} className='add'><img src={addLogo} className="imgAdd" alt="Add logo" /></button>
        </div>
    );
};

export default TaskForm;
import React, { useState } from 'react';
import deleteLogo from '../assets/delete.svg';
import editLogo from '../assets/edit.svg';
import doneLogo from '../assets/done.svg';
import saveLogo from '../assets/save.svg';

const TaskItem = ({ task, onComplete, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(task.nombre);

    const handleInputChange = (event) => {
        setEditedTaskName(event.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        if (editedTaskName.trim() !== '') {
            onEdit(task.id, editedTaskName.trim());
            setIsEditing(false);
        }
    };

    return (
        <li>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedTaskName}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSaveClick} className='save'><img src={saveLogo} className="imgSave" alt="Save logo" /></button>
                </>
            ) : (
                <>
                    <div className='lista-tarea'>
                        {task.nombre}
                    </div>
                    <div className='contenedor-botones'>
                        <button onClick={() => onComplete(task.id)} className='done'><img src={doneLogo} className="imgDone" alt="Done logo" /></button>
                        <button onClick={handleEditClick} className='edit'><img src={editLogo} className="imgEdit" alt="Edit logo" /></button>
                        <button onClick={() => onDelete(task.id)} className='delete'><img src={deleteLogo} className="imgDelete" alt="Delete logo" /></button>
                    </div>
                </>
            )}
        </li>
    );
};

export default TaskItem;
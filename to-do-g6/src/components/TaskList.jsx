import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onComplete, onEdit, onDelete }) => {
    return (
        <div className="tareas">
            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onComplete={onComplete}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
import React, { useState, useEffect } from 'react';
import TaskForm from '../src/components/TaskForm';
import TaskList from '../src/components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = (taskName) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), nombre: taskName, estado: false },
    ]);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleEditTask = (taskId, newTaskName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, nombre: newTaskName } : task
    );
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (taskId) => {
    const completedTask = tasks.find((task) => task.id === taskId);
    setCompletedTasks((prevCompletedTasks) => [
      ...prevCompletedTasks,
      completedTask,
    ]);
    handleDeleteTask(taskId);
  };

  useEffect(() => {
    // Efecto de Actualización
    console.log('La lista de tareas ha sido actualizada:', tasks);
  }, [tasks]);

  return (
    <div className='contenedor'>
      <section className='contenedor-tareas'>
        <h2>Tareas</h2>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onComplete={handleCompleteTask}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      </section>
      <section className='contenedor-completadas'>
        <h2>Tareas Completadas</h2>
        <ul>
          {completedTasks.map((completedTask) => (
            <li key={completedTask.id}>{completedTask.nombre}</li>
          ))}
        </ul>
      </section>
    </div >
  );
};

export default App;
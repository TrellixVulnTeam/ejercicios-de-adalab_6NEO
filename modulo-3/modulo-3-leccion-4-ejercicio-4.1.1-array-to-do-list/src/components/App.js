import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: false },
    { task: 'Hacer croquetas ricas', completed: false },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);

  const handleTasks = (ev) => {
    const clickTaskId = ev.currentTarget.id;
    console.log(clickTaskId);
    const foundTask = tasks.find((task) => task.id === clickTaskId);
    foundTask.completed = !foundTask.completed;
    setTasks([...tasks]);
  };

  const renderTasks = () => {
    // if (task === true) {
    //   tasks.add(done);
    // }
    return tasks.map((tasks) => {
      return (
        <li key={tasks.index} id={tasks.id} onClick={handleTasks}>
          <span>{tasks.task}</span>
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ul>{renderTasks()}</ul>
    </div>
  );
}

export default App;

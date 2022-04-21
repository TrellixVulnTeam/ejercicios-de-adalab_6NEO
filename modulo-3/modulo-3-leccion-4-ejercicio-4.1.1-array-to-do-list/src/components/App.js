import '../styles/App.scss';

function App() {
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderTasks = () => {
    // if (task === true) {
    //   tasks.add(done);
    // }
    return tasks.map((tasks) => {
      return (
        <li key={tasks.id}>
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

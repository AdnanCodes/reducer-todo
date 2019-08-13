import React, { useState } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import "./components/TodoComponents/Todo.css";

const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state

//   constructor() {
//     super();
//     this.state = {
//       todo: todoData
//     };
//   }

//   addTask = taskName => {
//     const newTask = {
//       task: taskName,
//       id: Date.now(),
//       completed: false
//     };
//     this.setState({
//       todo: [...this.state.todo, newTask]
//     });
//     console.log(this.state.todo, "New Task has been added");
//   };

//   toggleItem = id => {
//     this.setState({
//       todo: this.state.todo.map(item => {
//         if (item.id === id) {
//           return {
//             ...item,
//             completed: !item.completed
//           };
//         } else {
//           return item;
//         }
//       })
//     });
//   };

//   clearCompleted = () => {
//     this.setState({
//       todo: this.state.todo.filter(task => !task.completed)
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//         <TodoForm addTask={this.addTask} />
//         <TodoList
//           todo={this.state.todo}
//           toggleItem={this.toggleItem}
//           clearCompleted={this.clearCompleted}
//         />
//       </div>
//     );
//   }
// }

function App() {
  const [task, setTask] = useState(todoData);

  const addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    setTask([...task, newTask]);
    console.log(newTask, "New Task has been added");
  };

  const toggleItem = id => {
    setTask(
      task.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    );
  };

  const clearCompleted = () => {
    setTask(task.filter(task => !task.completed));
  };

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoForm addTask={addTask} />
      <TodoList
        todo={task}
        toggleItem={toggleItem}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;

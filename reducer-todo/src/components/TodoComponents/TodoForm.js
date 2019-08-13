import React, { useState, useReducer } from "react";
import { listReducer, initialState } from "../reducers/listReducer";

// class TodoForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: ""
//     };
//   }

//   handleChanges = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   submitItem = e => {
//     e.preventDefault();
//     this.props.addTask(this.state.name);
//   };

//   render() {
//     return (
//       <form onSubmit={this.submitItem}>
//         <input
//           type="text"
//           value={this.name}
//           name="name"
//           onChange={this.handleChanges}
//         />
//         <button>Add</button>
//       </form>
//     );
//   }
// }

const TodoForm = props => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(listReducer, initialState);

  const handleChanges = e => {
    setName(e.target.value);
  };

  const submitItem = e => {
    e.preventDefault();
    // Old version via props.addTask(name);
    dispatch({ type: "ADD_ITEM", payload: name });
    setName("");
  };

  return (
    <form onSubmit={submitItem}>
      <input type="text" value={name} name="name" onChange={handleChanges} />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;

import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  // Keep the 'todos' array in state
  // Pass that state and updater function 'setTodos' down to Form, so new todo can be added.
  // Pass 'todos' to 'TodoList' to show the list

  const completedTodo = todos.filter((todo) => todo.done).length;
  const totalTodo = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} setTodos={setTodos} />

      <Footer completedTodo={completedTodo} totalTodo={totalTodo} />
    </div>
  );
}

// before separate JSX into component

// import { useState } from "react";
// import TodoItem from "./TodoItem";

// export default function Todo() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();

//     setTodos([...todos, todo]);
//     setTodo(""); // clear text-box
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           onChange={(e) => setTodo(e.target.value)}
//           value={todo}
//           type="text"
//         />
//         <button type="submit">Add</button>
//       </form>

//       {todos.map((i) => (
//         <TodoItem key={i} item={i} />
//       ))}
//     </div>
//   );
// }

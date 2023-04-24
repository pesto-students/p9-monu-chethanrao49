import { useState } from "react";

import "./App.css";
import ToDoForm from "./components/ToDo/ToDoForm/ToDoForm";
import { dummyData } from "./data";
import { todoItemProps } from "./global";
import TodoItem from "./components/ToDo/TodoItem";
import Input from "./components/common/Input/Input";

function App() {
  const onChange = () => {};

  return (
    <div className="App">
      <section id="One"></section>
      <div>
        <ToDoForm />
      </div>
      <section id="Two"></section>
    </div>
  );
}

export default App;

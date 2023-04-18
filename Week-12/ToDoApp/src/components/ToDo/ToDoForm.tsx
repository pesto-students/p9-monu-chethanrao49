import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { todoItemProps } from "../../global";
import TodoItem from "./TodoItem";
import Input from "../common/Input/Input";
import { dummyData } from "../../data";
import "./TodoForum.css";

const ToDoForm: React.FC = () => {
  const [todos, setTodos] = useState<todoItemProps[]>([]);
  const [value, setValue] = useState<string>();
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const addTodo = (todo: string) => {
    if (todo !== undefined && todo.length > 0) {
      setTodos([...todos, { id: uuidv4(), text: todo, isCompleted: false }]);
    } else {
      setShowAlert(true);
    }
  };

  const deleteTodo = (id: string) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id: string) => {
    const final = todos.map((todo) => {
      let data: todoItemProps = {
        id: "",
        text: "",
        isCompleted: false,
      };

      if (todo.id === id) {
        data.id = todo.id;
        data.text = todo.text;
        data.isCompleted = todo.isCompleted ? false : true;
      } else {
        data = todo;
      }

      return data;
    });
    setTodos(final);
  };
  return (
    <>
      <h1
        style={{
          position: "absolute",
          display: "flex",
          alignContent: "center",
          left: "35vw",
          top: "10vh",
          color: "white",
        }}
      >
        TODO
      </h1>
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignContent: "center",
          left: "35vw",
          top: "18vh",
          color: "white",
        }}
      >
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={() => {
            addTodo(value);
            setValue("");
          }}
          placeholder="Add your task"
          type="text"
        />
      </div>

      <div
        style={{
          position: "relative",
          top: "13em",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          width: "30vw",
          height: "auto",
        }}
      >
        {showAlert && (
          <>
            {showAlert && (
              <div className="alert">
                <span className="close" onClick={() => setShowAlert(false)}>
                  X
                </span>
                Please do enter text
              </div>
            )}
          </>
        )}
        {!showAlert &&
          Array.isArray(todos) &&
          todos.map((todo: todoItemProps, idx: number) => (
            <>
              <TodoItem
                key={todo?.id}
                text={todo?.text || ""}
                isCompleted={todo?.isCompleted}
                id={todo.id}
                toggleComplete={() => toggleComplete(todo.id)}
                deleteTodo={() => deleteTodo(todo.id)}
              />
            </>
          ))}
      </div>
    </>
  );
};

export default ToDoForm;

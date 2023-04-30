import React from "react";
import { IoIosRemove } from "react-icons/io";
import { todoItemProps } from "../../global.d";
import "./TodoItem.css";

const TodoItem: React.FC<todoItemProps> = ({
  text,
  isCompleted,
  toggleComplete,
  deleteTodo,
}) => {
  return (
    <div className="conatiner">
      <input type="checkbox" checked={isCompleted} onChange={toggleComplete} />
      <span
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
          opacity: isCompleted ? 0.3 : 1,
        }}
      >
        {text}
      </span>
      <button className="remove-button" type="button">
        <IoIosRemove size={20} onClick={deleteTodo} />
      </button>
    </div>
  );
};

export default TodoItem;

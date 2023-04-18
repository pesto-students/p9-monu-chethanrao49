import React from "react";
import TodoItem from "./TodoItem";
import { todoItemProps } from "../../global.d";

const TodoList: React.FC<todoItemProps[]> = (data) => {
  return (
    <div>
      {data.map((todo: todoItemProps) => (
        <TodoItem
          key={todo?.text}
          text={todo?.text || ""}
          isCompleted={todo?.isCompleted || false}
        />
      ))}
    </div>
  );
};

export default TodoList;

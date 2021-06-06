import React, { useContext } from "react";
import TodoItem from "./TodoItem";

import { TodosContext } from "../store/todos-context";
import styles from "./Todos.module.css";
const Todos: React.FC = (props) => {
  const todoCtx = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todoCtx.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemove={todoCtx.removeTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;

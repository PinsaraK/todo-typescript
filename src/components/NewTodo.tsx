import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoCtx = useContext(TodosContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoText = inputRef.current!.value;

    if (todoText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(todoText);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="text">What do you need to do?</label>
      <input id="text" type="text" ref={inputRef}></input>
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;

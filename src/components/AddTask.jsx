import React from "react";

export default function AddTask() {
  return (
    <section className="addTask">
      <form>
        <input
          type="text"
          placeholder="add task"
          name="task"
          autoComplete="off"
          maxLength='25'
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

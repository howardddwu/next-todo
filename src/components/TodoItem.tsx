"use client";
import { log } from "console";
import { redirect } from "next/navigation";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  const handleOnclick = () => {
    deleteTodo(id);
    redirect("/new");
    console.log(id);
  };
  return (
    <li className="flex gap-2 items-center">
      <input
        id={id}
        type={"checkbox"}
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through 
      peer-checked:text-slate-500"
      >
        {title}
      </label>
      <button
        className="text-red-400 cursor-pointer"
        onClick={() => {
          handleOnclick();
        }}
      >
        X
      </button>
    </li>
  );
}

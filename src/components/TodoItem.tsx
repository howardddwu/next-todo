"use client";
import { prisma } from "../app/db";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  //   const handleOnClick = () => {
  //     deleteTodo(id);
  //     refreshData();
  //   };

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
          deleteTodo(id);
        }}
      >
        X
      </button>
    </li>
  );
}

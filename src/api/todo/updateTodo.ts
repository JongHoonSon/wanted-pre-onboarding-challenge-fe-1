import { UPDATE_TODO_BY_ID } from "./../../constants/apiUrls";
import axios from "axios";

interface deleteTodoByIdProps {
  todoId: string;
  todoTitle: string;
  todoContent: string;
}

export const updateTodo = ({
  todoId,
  todoTitle,
  todoContent,
}: deleteTodoByIdProps) => {
  return axios
    .put(
      UPDATE_TODO_BY_ID(todoId),
      { title: todoTitle, content: todoContent },
      {
        headers: {
          Authorization: window.localStorage.getItem("jwt"),
        },
      }
    )
    .then((res) => {
      console.log("res.data update todo");
      console.log(res.data);
      return res.data.data;
    });
};

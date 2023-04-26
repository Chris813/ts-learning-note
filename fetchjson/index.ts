import axios from "axios";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const url = "https://jsonplaceholder.typicode.com/todos/1";
axios.get(url).then((response) => {
  const todo: Todo = response.data;
  // 在编译的时候发现错误
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);
});
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};

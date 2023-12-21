import { Todo } from "./definitions";

export async function fetchTodos(): Promise<Todo[]> {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(data => data.json())
    return data;
}
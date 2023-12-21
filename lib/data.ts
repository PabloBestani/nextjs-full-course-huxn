import { Product } from "./definitions";

export async function fetchTodos(): Promise<Product[]> {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(data => data.json())
    return data;
}
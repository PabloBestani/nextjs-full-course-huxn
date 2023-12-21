'use client'

import React from 'react'
import { useEffect, useState } from 'react';

interface Product {
    id: number;
    title: string;
    completed: boolean;
}

export default function Todos() {
    const [todos, setTodos] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<Product[]> {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos')
                .then(data => data.json())
            return data;
        }
        fetchData().then(data => setTodos(data));
    }, []);

  return (
    <div>
        {todos?.map((todo) => {
            return <div key={todo.id}>
                <p className='border my-5'>{todo.title}</p>
            </div>
        })}
    </div>
  )
}

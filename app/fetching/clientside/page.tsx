'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import { Todo } from '@/lib/definitions';
import { fetchTodos } from '@/lib/data';

export default function ClientSideTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetchTodos().then(data => setTodos(data));
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

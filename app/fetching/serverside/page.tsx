import React from 'react'
import { Todo } from '@/lib/definitions';
import { fetchTodos } from '@/lib/data';



export default async function ServerSideFetching() {
  const todos: Todo[] = await fetchTodos();

  return (
    <div>
      {todos?.map((todo, key) => {
        return <div key={key}>
          <p>{todo.title}</p>
        </div>
      })}
    </div>
  )
}

'use client'

import React, { useState } from 'react'

export default function CreateUser() {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number | undefined>(undefined);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = async () => {
        const response = await fetch('../api/users', {
            method: 'POST',
            body: JSON.stringify({ name, age, email, password })
        })
        .then(res => res.json());
        console.log(response);
        if (response.ok) {
            alert("User created successfully");
        } else {
            alert("Error creating user");
        }
    }

  return (
    <div className='flex flex-col w-56'>
        CreateUser
        <input type='text' onChange={e => setName(e.target.value)} value={name} placeholder='username' />
        <input type='number' onChange={e => setAge(+e.target.value)} value={age} placeholder='age' />
        <input type='text' onChange={e => setEmail(e.target.value)} value={email} placeholder='email' />
        <input type='text' onChange={e => setPassword(e.target.value)} value={password} placeholder='password' />

        <button className='bg-zinc-500 rounded-2xl' onClick={onSubmit}>Create User</button>
    </div>
  )
}

'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';


const Home = () => {
  const router = useRouter();

  const navigate = (page: string): void => {
    router.push(page);
  }
  return (
    <section>
      <h1>useRouter</h1>
      <Link href="/projects">Projects Page</Link> <br />
      <button className='border px-2 py-4' onClick={() => navigate("about")}>About Page</button> <br />
      <button className='border px-2 py-4' onClick={() => navigate("login")}>Login Page</button>
    </section>
  )
}

export default Home
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500' 
})

const Home = () => {
  const router = useRouter();

  const navigate = (page: string): void => {
    router.push(page);
  }
  return (
    <section>
      <h1>useRouter</h1>
      <h2 className={roboto.className}>This is the Home Page, in Roboto font</h2>
      <Link href="/projects">Projects Page</Link> <br />
      <button className='border px-2 py-4' onClick={() => navigate("about")}>About Page</button> <br />
      <button className='border px-2 py-4' onClick={() => navigate("login")}>Login Page</button>
    </section>
  )
}

export default Home
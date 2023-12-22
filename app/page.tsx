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
    </section>
  )
}

export default Home
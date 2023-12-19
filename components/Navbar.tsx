import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <Link className='link' href='/'>Home</Link>
                <Link className='link' href='/about'>About</Link>
                <Link className='link' href='/portfolio'>Portfolio</Link>
            </div>
        </ul>
    </nav>
  )
}

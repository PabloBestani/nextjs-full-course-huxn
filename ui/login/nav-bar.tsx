import React from 'react'
import Link from 'next/link'
export default function NavBar() {
    const routes = [
    {
        href: '/login',
        text: 'Login main'
    },
    {
        href: '/login/user',
        text: 'User'
    },
    {
        href: '/login/admin',
        text: 'Admin'
    }
    ]
  return (
    <div>
        <ul>
            {routes?.map((route, key) => {
                const { href, text } = route;
                return (
                    <li key={key}>
                        <Link href={href}>{text}</Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

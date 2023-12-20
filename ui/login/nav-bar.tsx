'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const pathname = usePathname();
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
                if (href === pathname) return;
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

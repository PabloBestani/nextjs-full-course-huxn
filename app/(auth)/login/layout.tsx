import NavBar from '@/components/login/nav-bar';
import React from 'react'

export default function Layout({ children }: {
    children: React.ReactNode;
}) {
  return (
    <div>
        <NavBar />
        {children}
    </div>
  )
}

import React from 'react'
import Link from 'next/link'
export default function NavBar() {
  return (
    <div>
        <ul>
            <li>
                <Link href='/login'>Login main</Link>
            </li>
            <li>
                <Link href='/login/user'>User</Link>
            </li>
            <li>
                <Link href='/login/admin'>Admin</Link>
            </li>
        </ul>
    </div>
  )
}

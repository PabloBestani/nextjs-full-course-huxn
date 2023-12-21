import React from 'react'
import Image from 'next/image';
import beachImage from '@/public/rowan-heuvel-U6t80TWJ1DM-unsplash.jpg';

export default function Users() {
  return (
    <div>
      Users
      <Image src={beachImage} alt='Beach Image' width={500} />
      <p>
        Foto de <br/>
        <a href="https://unsplash.com/es/@insolitus?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Rowan Heuvel</a> <br/>
        en <a href="https://unsplash.com/es/fotos/fotografia-de-paisaje-de-la-orilla-del-mar-bajo-nubes-cumulos-U6t80TWJ1DM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      </p>
      <Image src='https://images.unsplash.com/photo-1703146173974-1a52b86f715d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='beach image' width={500} height={300} />
    </div>
  )
}

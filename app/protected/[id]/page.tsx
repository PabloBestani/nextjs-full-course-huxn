import { redirect } from 'next/navigation';
import React from 'react'

export default function ProtectedById({ params }: {
    params: {
        id: string;
    }
}) {
    const id = Number(params.id);
    if (isNaN(id)) {
        redirect('/');
    }
  return (
    <div>ProtectedById</div>
  )
}

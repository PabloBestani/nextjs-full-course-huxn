import React from 'react'

export default function UserDetail({ params }: {
    params: {
        userId: string;
    }
}) {
    const { userId } = params;
  return (
    <div>User detail for {userId}</div>
  )
}

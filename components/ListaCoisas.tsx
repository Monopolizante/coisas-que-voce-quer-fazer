import React from 'react'
import axios from 'axios'
export default async function ListaCoisas() {
    const response = await fetch(`http://localhost:3000/api/testeApi`)
    const data = await response.json()
    console.log(data)
  return (
    <div>
        <h1>
            Lista de Coisas
        </h1>
        <div>
            {data.map((post) => (
            <p key={post.id}>
                    {post.name}
            </p> 
            ))}
        </div>
    </div>
  )
}

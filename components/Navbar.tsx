import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <header>
        <nav>
            <Link href="/" className="hover:text-zinc-950">
                Home
            </Link>
            <Link href="/teste" className="hover:text-zinc-950">
                Teste
            </Link>
        </nav>
    </header>
  )
}

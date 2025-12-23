import { loginFn } from '@/features/auth/lib/auth'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await loginFn({ data: { email } })
  }

  return (
    <form
      className="flex flex-col gap-4 max-w-md border p-3 mx-auto"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Email Id:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-black p-1"
      />
      <button type="submit" className="border border-black rounded">
        Sign In
      </button>
    </form>
  )
}

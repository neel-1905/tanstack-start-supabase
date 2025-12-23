import { verifyLogin } from '@/features/auth/lib/auth'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/confirm')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url)
        const token_hash = url.searchParams.get('token_hash')!
        const type = url.searchParams.get('type')! as 'email' // usually "email"

        const { user } = await verifyLogin({
          data: {
            token_hash,
            type,
          },
        })

        if (!user) {
          return redirect({ to: '/auth/sign-in' })
        }

        return redirect({ to: '/' })
      },
    },
  },
})

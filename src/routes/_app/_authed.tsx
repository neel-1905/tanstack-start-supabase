import { getUserFn } from '@/features/auth/lib/auth'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_authed')({
  component: RouteComponent,
  beforeLoad: async () => {
    try {
      const { user } = await getUserFn()
      if (!!user.email) redirect({ to: '/' })
      else throw redirect({ to: '/auth/sign-in' })
    } catch (error: any) {
      throw redirect({ to: '/auth/sign-in' })
    }
  },
})

function RouteComponent() {
  return <Outlet />
}

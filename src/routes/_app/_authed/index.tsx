import { getUserFn, logoutFn } from '@/features/auth/lib/auth'
import { handleServerError } from '@/lib/error/handle-server-error'
import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_authed/')({
  component: App,

  beforeLoad: async () => {
    const { user } = await getUserFn()
    return user
  },
})

function App() {
  const user = Route.useRouteContext()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logoutFn()
      router.navigate({ to: '/auth/sign-in' })
    } catch (error) {
      handleServerError(error)
    }
  }

  return (
    <div>
      <span className="text-primary">{user.email}</span>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

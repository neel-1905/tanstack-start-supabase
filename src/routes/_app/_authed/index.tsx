import { getUserFn, logoutFn } from '@/features/auth/lib/auth'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_authed/')({
  component: App,

  beforeLoad: async () => {
    const { user } = await getUserFn()
    return user
  },
})

function App() {
  const user = Route.useRouteContext()
  const handleLogout = async () => {
    await logoutFn()
  }

  return (
    <div>
      <span>{user.email}</span>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

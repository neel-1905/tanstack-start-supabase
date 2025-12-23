import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_authed/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/projects"!</div>
}

import { createFileRoute } from '@tanstack/react-router'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import SignInForm from '@/features/auth/ui/sign-in-form'

export const Route = createFileRoute('/auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="min-h-screen flex-center">
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Sign in to using your email id or google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </main>
  )
}

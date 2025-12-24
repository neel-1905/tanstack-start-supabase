import { Input } from '@/components/ui/input'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { appToast } from '@/lib/toast.utils'
import { handleServerError } from '@/lib/error/handle-server-error'
import { loginFn } from '@/features/auth/lib/auth'
import Button from '@/components/ui/button/button'

const formSchema = z.object({
  email: z.email().min(1, { message: 'Email is required' }),
})

function SignInForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  })

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await loginFn({ data: { email: values.email } })
      appToast.success({
        title: `Login link sent to ${values.email}`,
      })
    } catch (error: any) {
      handleServerError(error)
    }
  }

  return (
    <form id="sign-in-form" onSubmit={form.handleSubmit(handleSubmit)}>
      <FieldGroup>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-input-email">Email Id:</FieldLabel>
              <Input
                {...field}
                id="form-rhf-input-email"
                aria-invalid={fieldState.invalid}
                placeholder="jdoe@xyz.com"
                autoComplete="email"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Field orientation="horizontal">
          <Button
            isLoading={form.formState.isSubmitting}
            type="submit"
            form="sign-in-form"
            className="w-full"
          >
            Sign In
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}

export default SignInForm

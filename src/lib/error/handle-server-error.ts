import { appToast } from '@/lib/toast.utils'

type ZodIssue = {
  message: string
  path?: (string | number)[]
}

function isJsonArrayString(value: string) {
  if (!value.startsWith('[')) return false
  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed)
  } catch {
    return false
  }
}

export function handleServerError(error: unknown) {
  if (typeof error === 'object' && error !== null && 'message' in error) {
    const message = String((error as any).message)

    // 🟡 ZOD INPUT ERROR
    if (isJsonArrayString(message)) {
      const issues = JSON.parse(message) as ZodIssue[]

      // UX decision: don't toast validation errors
      return appToast.error({
        title: `Invalid ${issues[0]?.path?.[0] ?? 'input'}`,
        description: issues[0]?.message,
      })
    }

    // 🔵 SUPABASE / SERVER ERROR
    appToast.error({
      title: 'Error',
      description: message,
    })
    return
  }

  // 🔴 FALLBACK
  appToast.error({
    title: 'Unexpected error',
    description: 'Something went wrong',
  })
}

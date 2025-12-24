// lib/toast/toast.utils.ts
import { toast } from 'sonner'

import { ErrorToast, SuccessToast } from '@/components/ui/toast'

type ToastArgs = {
  title: string
  description?: string
}

export const appToast = {
  success: ({ title, description }: ToastArgs) =>
    toast.custom((id) => (
      <SuccessToast id={id} title={title} description={description} />
    )),

  error: ({ title, description }: ToastArgs) =>
    toast.custom((id) => (
      <ErrorToast id={id} title={title} description={description} />
    )),
}

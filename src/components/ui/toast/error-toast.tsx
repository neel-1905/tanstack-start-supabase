// components/ui/toasts/ErrorToast.tsx
import { XCircle } from 'lucide-react'
import BaseToast from './base-toast'

type Props = {
  id: string | number
  title: string
  description?: string
}

function ErrorToast({ id, title, description }: Props) {
  return (
    <BaseToast
      id={id}
      title={title}
      description={description}
      icon={<XCircle className="h-5 w-5 text-destructive" />}
      className=" text-destructive"
    />
  )
}

export default ErrorToast

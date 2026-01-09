// components/ui/toasts/SuccessToast.tsx
import { CheckCircle } from 'lucide-react'
import BaseToast from './base-toast'

type Props = {
  id: string | number
  title: string
  description?: string
}

function SuccessToast({ id, title, description }: Props) {
  return (
    <BaseToast
      id={id}
      title={title}
      description={description}
      icon={<CheckCircle className="h-5 w-5 text-success" />}
      className="bg-card text-success"
    />
  )
}

export default SuccessToast

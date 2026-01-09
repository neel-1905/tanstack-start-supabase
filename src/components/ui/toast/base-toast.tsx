// components/ui/toasts/BaseToast.tsx
import { X } from 'lucide-react'
import { toast } from 'sonner'

type BaseToastProps = {
  id: string | number
  title: string
  description?: string
  icon?: React.ReactNode
  className?: string
}

function BaseToast({
  id,
  title,
  description,
  icon,
  className,
}: BaseToastProps) {
  return (
    // <div
    //   className={`relative flex gap-3 rounded-lg border p-5 shadow-sm ${className}`}
    // >
    //   {icon && <div className="mt-0.5">{icon}</div>}

    //   <div className="flex-1">
    //     <p className="font-medium leading-none">{title}</p>
    //     {description && (
    //       <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    //     )}
    //   </div>

    //   <button
    //     onClick={() => toast.dismiss(id)}
    //     className="absolute right-3 top-3 opacity-60 hover:opacity-100"
    //   >
    //     <X className="h-4 w-4" />
    //   </button>
    // </div>
    <div
      className={`relative rounded-primary border p-4 shadow-md w-xs ${className}`}
    >
      <div className="flex items-start gap-4">
        {icon && <div className="size-4">{icon}</div>}

        <div className="flex-1 flex flex-col gap-3">
          <p className="font-medium leading-none">{title}</p>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>

      <button
        onClick={() => toast.dismiss(id)}
        className="absolute right-3 top-3 opacity-60 hover:opacity-100"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

export default BaseToast

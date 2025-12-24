export type ButtonProps = {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  className?: string
  disabled?: boolean
  children: React.ReactNode
  isLoading?: boolean
}

export type ButtonProps = {
    children: React.ReactNode
    disabled?: boolean
    loading?: boolean
    onClick?: () => void
    action?: string
    href?: string
    type?: 'button' | 'submit' | 'reset'
}
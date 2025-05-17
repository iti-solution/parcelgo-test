import styles from './button.module.scss'

import { Link } from '@/i18n/routing'

import { cn } from '@/utils'

import { PiSpinnerBold } from 'react-icons/pi'

import type { ButtonProps } from '@/types/button'

const ButtonSecondary = ({ children, disabled, loading, onClick, action, href, type = 'button' }: ButtonProps) => {

    const isLoading = loading ? styles.rootLoading : ''

    const classes = cn(styles.root, styles.secondary, isLoading)

    if (href) {
        return (
            <Link href={href} className={classes}>
                {loading ? <PiSpinnerBold /> : children}
            </Link>
        )
    }

    return (
        <button data-action={action} onClick={onClick} disabled={loading || disabled} className={classes} type={type}>
            {loading ? <PiSpinnerBold /> : children}
        </button>
    )
}

export default ButtonSecondary
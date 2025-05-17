import styles from './wrapper.module.scss'

import { cn } from '@/utils'

type Props = {
    className?: string
    children: React.ReactNode
}

const Wrapper = ({ className, children }: Props) => {
    return (
        <div className={cn(styles.root, className)}>
            {children}
        </div>
    )
}

export default Wrapper
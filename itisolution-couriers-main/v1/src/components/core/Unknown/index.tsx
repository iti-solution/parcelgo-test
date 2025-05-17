import styles from './unknown.module.scss'

import Wrapper from '@/components/ui/Wrapper'

import { ButtonSecondary } from '@/components/ui/Button'

import { PiArrowLeftBold } from 'react-icons/pi'

type Props = {
    title: string
    description: string
    button: {
        text: string
        href: string
    }
}

const Unknown = (props: Props) => {

    return (
        <div className={styles.root}>
            <Wrapper className={styles.rootWrapper}>
                <div className={styles.rootTitle}>{props.title}</div>
                <div className={styles.rootDescription}>{props.description}</div>
                <ButtonSecondary href={props.button.href}>
                    <PiArrowLeftBold />
                    {props.button.text}
                </ButtonSecondary>
            </Wrapper>
        </div>
    )
}

export default Unknown
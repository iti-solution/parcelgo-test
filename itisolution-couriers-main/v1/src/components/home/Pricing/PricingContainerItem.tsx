import styles from './pricing.module.scss'

import { cn } from '@/utils'

import { PiCheckBold } from 'react-icons/pi'

import { ButtonSecondary } from '@/components/ui/Button'

import { useTranslations } from 'next-intl'

import type { HomePage } from '@/payload-types'

type Props = NonNullable<HomePage['pricing']['items']>[number]

const PricingContainerItem = (props: Props) => {

    const translation = useTranslations('Core.Cta')

    const isRecommended = props.recommended ? styles.containerItemRecommended : ''

    return (
        <div className={cn(styles.containerItem, isRecommended)}>

            <h3 className={styles.containerItemTitle}>{props.title}</h3>

            <p className={styles.containerItemDescription}>{props.description}</p>

            <data className={styles.containerItemPrice} value={props.price}>{props.price}</data>

            <ul className={styles.containerItemAdvantages}>
                {props.advantages?.map(item => <li key={item.id} className={styles.containerItemAdvantagesItem}><PiCheckBold /><span>{item.advantage}</span></li>)}
            </ul>

            <ButtonSecondary action="contact">{translation('ButtonText')}</ButtonSecondary>

        </div>
    )
}

export default PricingContainerItem
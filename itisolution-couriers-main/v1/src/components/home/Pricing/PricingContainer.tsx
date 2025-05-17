import styles from './pricing.module.scss'

import PricingContainerItem from './PricingContainerItem'

import type { HomePage } from '@/payload-types'

type Props = {
    items?: HomePage['pricing']['items']
}

const PricingContainer = (props: Props) => {

    return (
        <div className={styles.container}>
            {props.items?.map(item => (<PricingContainerItem key={item.id} {...item} />))}
        </div>
    )
}

export default PricingContainer
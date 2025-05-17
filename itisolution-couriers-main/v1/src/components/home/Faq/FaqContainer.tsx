import styles from './faq.module.scss'

import FaqContainerItem from './FaqContainerItem'

import type { HomePage } from '@/payload-types'

type Props = {
    items?: HomePage['faq']['items']
}

const FaqContainer = (props: Props) => {

    return (
        <div className={styles.container}>
            {props.items?.map(item => (<FaqContainerItem key={item.id} {...item} />))}
        </div>
    )
}

export default FaqContainer
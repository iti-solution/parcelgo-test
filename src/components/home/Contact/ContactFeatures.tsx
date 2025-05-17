import styles from './contact.module.scss'

import ContactFeaturesItem from './ContactFeaturesItem'

import type { HomePage } from '@/payload-types'

type Props = {
    items?: HomePage['contact']['features']
}

const ContactFeatures = (props: Props) => {

    return (
        <div className={styles.features}>
            {props.items?.map(item => (<ContactFeaturesItem key={item.id} {...item} />))}
        </div>
    )
}

export default ContactFeatures
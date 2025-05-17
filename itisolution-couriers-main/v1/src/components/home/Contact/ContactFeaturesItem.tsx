import styles from './contact.module.scss'

import IconPicker from '@/components/ui/IconPicker'

import type { HomePage } from '@/payload-types'

type Props = NonNullable<HomePage['contact']['features']>[number]

const ContactFeaturesItem = (props: Props) => {

    console.log('?', props)

    return (
        <div className={styles.featuresItem}>

            <div className={styles.featuresItemIcon}>
                <IconPicker iconName={props.icon} />
            </div>

            <p className={styles.featuresItemDescription}>{props.description}</p>

        </div>
    )
}

export default ContactFeaturesItem
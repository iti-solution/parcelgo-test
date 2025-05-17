import styles from './opinions.module.scss'

import OpinionsContainerItem from './OpinionsContainerItem'

import type { HomePage } from '@/payload-types'

type Props = {
    items?: HomePage['opinions']['items']
}

const OpinionsContainer = ({ items }: Props) => {

    const containers: Array<NonNullable<HomePage['opinions']['items']>[number]>[] = [[], [], []]

    items?.forEach((item, index) => {

        if (item.id) {
            const containerIndex = index % 3
            containers[containerIndex].push(item)
        }

    })

    return (
        <div className={styles.container}>

            <div className={styles.containerColumn}>
                {containers[0].map(item => (
                    <OpinionsContainerItem key={item.id} {...item} />
                ))}
            </div>

            <div className={styles.containerColumn}>
                {containers[1].map(item => (
                    <OpinionsContainerItem key={item.id} {...item} />
                ))}
            </div>

            <div className={styles.containerColumn}>
                {containers[2].map(item => (
                    <OpinionsContainerItem key={item.id} {...item} />
                ))}
            </div>

        </div>
    )
}

export default OpinionsContainer

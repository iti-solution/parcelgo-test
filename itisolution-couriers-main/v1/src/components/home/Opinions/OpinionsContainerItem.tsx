import styles from './opinions.module.scss'

import { PiQuotesBold } from 'react-icons/pi'

import Image from 'next/image'

import type { HomePage } from '@/payload-types'

type Props = NonNullable<HomePage['opinions']['items']>[number]

const OpinionsContainerItem = (props: Props) => {

    return (

        <div className={styles.containerColumnItem}>

            <PiQuotesBold />

            <div className={styles.containerColumnItemDescription}>
                {props.opinion}
            </div>

            <div className={styles.containerColumnItemAuthor}>

                <div className={styles.containerColumnItemAuthorAvatar}>

                    {props.avatar && typeof props.avatar === 'object' && props.avatar.url && (
                        <Image
                            src={props.avatar.url}
                            alt={props.avatar.alt || 'Avatar'}
                            height={100}
                            width={100}
                        />
                    )}
                </div>

                <div className={styles.containerColumnItemAuthorRole}>
                    <strong>{props.author}</strong>, {props.role}
                </div>

            </div>

        </div>
    )
}

export default OpinionsContainerItem
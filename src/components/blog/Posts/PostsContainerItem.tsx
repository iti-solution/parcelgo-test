import styles from './posts.module.scss'

import Image from 'next/image'
import { Link } from '@/i18n/routing'

import { useLocale } from 'next-intl'

import type { Post } from '@/payload-types'

const PostsContainerItem = (props: Post) => {

    const locale = useLocale()

    return (
        <div className={styles.containerItem}>

            <div className={styles.containerItemDate}>

                {new Date(props.createdAt).toLocaleDateString(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}

            </div>

            <Link href={'/blog/' + props.slug} className={styles.containerItemLink}>{props.title}</Link>

            <div className={styles.containerItemImage}>
                {typeof props.image !== 'number' && props.image?.url && (<Image src={props.image.url} alt={props.image.alt} fill />)}
            </div>

        </div>
    )
}

export default PostsContainerItem
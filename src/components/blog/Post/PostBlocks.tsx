import styles from './post.module.scss'

import PostBlocksArticle from './PostBlocksArticle'
import PostBlocksCta from './PostBlocksCta'

import { useMemo } from 'react'

import type { Post } from '@/payload-types'

const PostBlocks = ({ blocks }: { blocks: Post['blocks'] }) => {

    const getBlockComponent = useMemo(() => (blockType: string) => {

        switch (blockType) {

            case 'posts-article': return PostBlocksArticle

            case 'posts-cta': return PostBlocksCta

            default: return null
        }

    }, [])

    return (
        <div className={styles.blocks}>

            {blocks?.map((block) => {

                const BlockComponent = getBlockComponent(block.blockType)

                if (!BlockComponent) return null

                return <BlockComponent key={block.id} data={block as any} />

            })}
        </div>
    )
}

export default PostBlocks

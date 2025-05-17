'use client'

import styles from './post.module.scss'
import { cn } from '@/utils'
import { useEffect, useState } from 'react'
import type { Post } from '@/payload-types'

const PostAside = ({ blocks }: { blocks: Post['blocks'] }) => {

    const [activeBlock, setActiveBlock] = useState<string | null>(null)

    useEffect(() => {

        const getCurrentBlock = () => {

            let currentBlock = null

            for (const block of blocks || []) {

                const element = document.querySelector(`[data-identifier="${block.id}"]`)

                if (element) {

                    const rect = element.getBoundingClientRect()

                    if (rect.top >= 0 && rect.top < window.innerHeight / 3) {
                        currentBlock = block.id
                        break
                    }

                }

            }

            return currentBlock
        }

        const handleScroll = () => {

            const currentBlock = getCurrentBlock()

            if (currentBlock && currentBlock !== activeBlock) {
                setActiveBlock(currentBlock)
            }

        }

        setActiveBlock(getCurrentBlock() as string)

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [blocks, activeBlock])

    const scrollToBlock = (id: string) => {

        const element = document.querySelector(`[data-identifier="${id}"]`)

        if (element) {

            window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - 100,
                behavior: 'smooth'
            })

        }

    }

    return (
        <aside className={styles.aside}>
            <div className={styles.asideList}>
                {blocks?.map(block => {
                    const isActive = activeBlock === block.id ? styles.asideListItemActive : ''

                    if (block.blockType === 'posts-article') {
                        return (
                            <div 
                                key={block.id} 
                                className={cn(styles.asideListItem, isActive)}
                                onClick={() => scrollToBlock(block.id as string)}
                            >
                                {block.blockName}
                            </div>
                        )
                    }

                    return null
                })}
            </div>
        </aside>
    )
}

export default PostAside

'use client'

import styles from './posts.module.scss'

import { useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

import { cn } from '@/utils'

import type { Category } from '@/payload-types'

const PostsCategories = ({ categories }: { categories: Category[] }) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const toggleCategory = useCallback((category: string) => {
        const params = new URLSearchParams(searchParams.toString())

        const currentCategories = params.get('categories')?.split(',') || []
        const isActive = currentCategories.includes(category)

        const updatedCategories = isActive
            ? currentCategories.filter(cat => cat !== category)
            : [...currentCategories, category]

        if (updatedCategories.length > 0) {
            params.set('categories', updatedCategories.join(','))
        } else {
            params.delete('categories')
        }

        params.delete('page')

        router.push(`?${params.toString().replace(/%2C/g, ',')}`)
    }, [searchParams, router])

    return (
        <div className={styles.categories}>

            {categories.map(category => {

                const isActive = searchParams.get('categories')?.split(',').includes(category.slug) ? styles.categoriesItemActive : ''

                return (
                    <button
                        type="button"
                        key={category.slug}
                        className={cn(styles.categoriesItem, isActive)}
                        onClick={() => toggleCategory(category.slug)}
                    >
                        {category.name}
                    </button>
                )
            })}

        </div>
    )
}

export default PostsCategories

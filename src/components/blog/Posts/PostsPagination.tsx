'use client'

import styles from './posts.module.scss'
import 'rc-pagination/assets/index.css'

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

import Pagination from 'rc-pagination'

import { Link, useRouter } from '@/i18n/routing'

import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'

import { useCallback } from 'react'

type Props = {
    page: number
    limit: number
    total: number
}

const PostsPagination = (props: Props) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const translation = useTranslations('Posts.Pagination')

    const getUpdatedUrl = (currentPage: number) => {

        const params = new URLSearchParams(searchParams.toString())

        if (currentPage < 2) {
            params.delete('page')
        } else {
            params.set('page', String(currentPage))
        }

        return params.toString() ? `/blog/?${params.toString().replace(/%2C/g, ',')}` : '/blog'
    }

    const handlePagination = useCallback((currentPage: number) => {
        router.push(getUpdatedUrl(currentPage))
    }, [router, getUpdatedUrl])

    const itemRender = (page: number, type: string, element: React.ReactNode) => {

        if (type === 'page') return (
            <Link onClick={event => event.preventDefault()} rel="follow" href={getUpdatedUrl(page)}>
                {page}
            </Link>
        )

        return element
    }

    if (props.total <= props.limit) return null

    return (
        <div className={styles.pagination}>
            <Pagination
                locale={{
                    items_per_page: translation('ItemsPerPage'),
                    jump_to: translation('JumpTo'),
                    jump_to_confirm: translation('JumpToConfirm'),
                    page: translation('Page'),
                    prev_page: translation('PrevPage'),
                    next_page: translation('NextPage'),
                    prev_5: translation('Prev5'),
                    next_5: translation('Next5'),
                    prev_3: translation('Prev3'),
                    next_3: translation('Next3'),
                    page_size: translation('PageSize')
                }}
                total={props.total}
                current={props.page || 1}
                pageSize={props.limit}
                onChange={handlePagination}
                prevIcon={<PiCaretLeftBold />}
                nextIcon={<PiCaretRightBold />}
                itemRender={itemRender}
            />
        </div>
    )
}

export default PostsPagination

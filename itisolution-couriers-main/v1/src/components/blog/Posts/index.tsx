import styles from './posts.module.scss'

import Wrapper from '@/components/ui/Wrapper'

import PostsArticle from './PostsArticle'
import PostsCategories from './PostsCategories'
import PostsContainer from './PostsContainer'
import PostsPagination from './PostsPagination'

import type { Category, Post } from '@/payload-types'

type Props = {
    posts: Post[]
    categories: Category[]
    pagination: { total: number, limit: number, page: number }
}

const Posts = (props: Props) => {

    return (
        <section id="posts" className={styles.root}>

            <Wrapper className={styles.rootWrapper}>

                <PostsArticle />

                <PostsCategories categories={props.categories} />

                <PostsContainer posts={props.posts} />

                <PostsPagination {...props.pagination} />

            </Wrapper>

        </section>
    )
}

export default Posts
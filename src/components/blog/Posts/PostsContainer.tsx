import styles from './posts.module.scss'

import PostsContainerItem from './PostsContainerItem'

import type { Post } from '@/payload-types'

const PostsContainer = ({ posts }: { posts: Post[] }) => {

    return (
        <div className={styles.container}>

            {posts.map(item => <PostsContainerItem key={item.id} {...item} />)}

        </div>
    )
}

export default PostsContainer
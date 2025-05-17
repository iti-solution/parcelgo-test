import styles from './post.module.scss'

import Wrapper from '@/components/ui/Wrapper'

import PostHero from './PostHero'
import PostBlocks from './PostBlocks'
import PostAside from './PostAside'

import type { Post } from '@/payload-types'

type Props = Post

const Post = (props: Props) => {

    return (
        <section id="post" className={styles.root}>

            <Wrapper className={styles.rootWrapper}>

                <PostHero
                    title={props.title}
                    description={props.description}
                    image={props.image}
                    categories={props.categories}
                    author={props.author}
                    createdAt={props.createdAt}
                    updatedAt={props.updatedAt}
                />

                <div className={styles.rootWrapperContainer}>

                    <PostAside blocks={props.blocks} />

                    <PostBlocks blocks={props.blocks} />

                </div>

            </Wrapper>

        </section>
    )
}

export default Post
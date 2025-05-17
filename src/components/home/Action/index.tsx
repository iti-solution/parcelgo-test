import styles from './action.module.scss'

import Wrapper from '@/components/ui/Wrapper'

import ActionArticle from './ActionArticle'

const Action = () => {

    return (
        <section className={styles.root}>

            <Wrapper className={styles.rootWrapper}>

                <ActionArticle />

            </Wrapper>

        </section>
    )
}

export default Action
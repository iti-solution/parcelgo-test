import styles from './opinions.module.scss'

import Wrapper from '@/components/ui/Wrapper'

import OpinionsArticle from './OpinionsArticle'
import OpinionsContainer from './OpinionsContainer'

import type { HomePage } from '@/payload-types'

type Props = HomePage['opinions']

const Opinions = (props: Props) => {

    return (
        <section id="opinions" className={styles.root}>

            <Wrapper className={styles.rootWrapper}>

                <OpinionsArticle title={props.title} description={props.description} />

                <OpinionsContainer items={props.items} />

            </Wrapper>

        </section>
    )
}

export default Opinions
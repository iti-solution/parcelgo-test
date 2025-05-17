import styles from './faq.module.scss'

import Wrapper from '@/components/ui/Wrapper'

import FaqArticle from './FaqArticle'
import FaqContainer from './FaqContainer'

import type { HomePage } from '@/payload-types'

type Props = HomePage['faq']

const Faq = (props: Props) => {

    return (
        <section className={styles.root}>

            <Wrapper className={styles.rootWrapper}>

                <FaqArticle title={props.title} description={props.description} />

                <FaqContainer items={props.items} />

            </Wrapper>

        </section>
    )
}

export default Faq
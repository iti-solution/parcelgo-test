import styles from './pricing.module.scss'

import Wrapper from '@/components/ui/Wrapper'

import PricingArticle from './PricingArticle'
import PricingContainer from './PricingContainer'

import type { HomePage } from '@/payload-types'

type Props = HomePage['pricing']

const Pricing = (props: Props) => {

    return (
        <section id="pricing" className={styles.root}>

            <Wrapper className={styles.rootWrapper}>

                <PricingArticle title={props.title} description={props.description} />

                <PricingContainer items={props.items} />

            </Wrapper>

        </section>
    )
}

export default Pricing
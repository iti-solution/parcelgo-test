import styles from './hero.module.scss'

import Wrapper from '@/components/ui/Wrapper'

import HeroArticle from './HeroArticle'
import HeroPreview from './HeroPreview'
import HeroWave from './HeroWave'

import type { HomePage } from '@/payload-types'

type Props = HomePage['hero']

const Hero = (props: Props) => {

    return (
        <section className={styles.root} id="parcelgo-hero-intersection">

            <Wrapper className={styles.rootWrapper}>

                <HeroArticle
                    title={props.title}
                    description={props.description}
                    phrases={props.phrases || []}
                />

                <HeroPreview />

            </Wrapper>

            <HeroWave />

        </section>
    )
}

export default Hero
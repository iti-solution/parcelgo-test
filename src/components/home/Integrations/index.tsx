import styles from './integrations.module.scss'

import Wrapper from '@/components/ui/Wrapper'

import IntegrationsSwiper from './IntegrationsSwiper'

const Integrations = () => {

    return (
        <section id="integrations" className={styles.root}>

            <Wrapper className={styles.rootWrapper}>

                <IntegrationsSwiper />

            </Wrapper>

        </section>
    )
}

export default Integrations
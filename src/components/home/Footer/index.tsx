import styles from './footer.module.scss'

import FooterIntroduction from './FooterIntroduction'

import Wrapper from '@/components/ui/Wrapper'

const Footer = () => {

    return (
        <footer className={styles.root}>
            
            <Wrapper className={styles.rootWrapper}>

                <FooterIntroduction />

            </Wrapper>

        </footer>
    )
}

export default Footer
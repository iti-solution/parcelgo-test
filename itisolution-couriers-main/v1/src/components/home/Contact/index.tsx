import styles from './contact.module.scss'

import Wrapper from '@/components/ui/Wrapper'

import ContactForm from './ContactForm'
import ContactArticle from './ContactArticle'
import ContactFeatures from './ContactFeatures'

import type { HomePage } from '@/payload-types'

type Props = HomePage['contact']

const Contact = (props: Props) => {

    return (
        <section id="contact" className={styles.root}>

            <Wrapper className={styles.rootWrapper}>

                <div className={styles.rootWrapperContainer}>

                    <ContactArticle title={props.title} description={props.description} />

                    <ContactFeatures items={props.features} />

                </div>

                <div className={styles.rootWrapperContainer}>

                    <ContactForm />
                    
                </div>

            </Wrapper>

        </section>
    )
}

export default Contact
import styles from './functionalities.module.scss'

import Wrapper from '@/components/ui/Wrapper'

import FunctionalitiesItem from './FunctionalitiesItem'

import type { HomePage } from '@/payload-types'

type Props = HomePage['functionalities']

const Functionalities = (props: Props) => {

    return (
        <section id="functionalities" className={styles.root}>

            <Wrapper className={styles.rootWrapper}>

                {props?.items?.map((item, index) => (<FunctionalitiesItem key={item.id} index={index} {...item} />))}

            </Wrapper>

        </section>
    )
}

export default Functionalities
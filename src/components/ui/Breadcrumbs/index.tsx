import styles from './breadcrumbs.module.scss'

import Wrapper from '@/components/ui/Wrapper'

const Breadcrumbs = () => {

    return (
        <div className={styles.root}>
            <Wrapper className={styles.rootWrapper}>
                <h1>Lokacja</h1>
            </Wrapper>
        </div>
    )
}

export default Breadcrumbs
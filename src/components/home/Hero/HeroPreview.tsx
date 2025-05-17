import styles from './hero.module.scss'

import heroAppScreen from '@/assets/images/dashboard.webp'

import Image from 'next/image'

const HeroPreview = () => {

    return (
        <div className={styles.preview}>
            <Image
                priority
                width={1640}
                height={1300}
                src={heroAppScreen}
                alt="Aplikacja do porównywania usług kurierskich"
            />
        </div>
    )
}

export default HeroPreview
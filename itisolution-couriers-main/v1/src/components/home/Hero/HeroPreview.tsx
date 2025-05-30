import styles from './hero.module.scss'

import heroAppScreen from '@/assets/images/dashboard.webp'

import Image from 'next/image'

const HeroPreview = () => {
    return (
        <div className={styles.preview}>
            <Image
                priority
                src={heroAppScreen}
                alt="Aplikacja do porównywania usług kurierskich"
                width={1640}
                height={1300}
            />
        </div>
    )
}

export default HeroPreview
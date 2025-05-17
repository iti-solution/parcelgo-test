import styles from './footer.module.scss'

import { PiFacebookLogoBold, PiInstagramLogoBold, PiLinkedinLogoBold, PiXLogoBold, PiYoutubeLogoBold } from 'react-icons/pi'

import Link from 'next/link'

const FooterIntroduction = () => {

    return (
        <div className={styles.introduction}>

            <div className={styles.introductionLogo}>
                ParcelGo
            </div>

            <div className={styles.introductionMedia}>

                <Link rel="nofollow" href="https://www.youtube.com/" target="_blank" className={styles.introductionMediaLink}><PiFacebookLogoBold /></Link>

                <Link rel="nofollow" href="https://www.youtube.com/" target="_blank" className={styles.introductionMediaLink}><PiLinkedinLogoBold /></Link>

                <Link rel="nofollow" href="https://www.youtube.com/" target="_blank" className={styles.introductionMediaLink}><PiYoutubeLogoBold /></Link>

                <Link rel="nofollow" href="https://www.youtube.com/" target="_blank" className={styles.introductionMediaLink}><PiXLogoBold /></Link>

                <Link rel="nofollow" href="https://www.youtube.com/" target="_blank" className={styles.introductionMediaLink}><PiInstagramLogoBold /></Link>

            </div>

        </div>
    )
}

export default FooterIntroduction
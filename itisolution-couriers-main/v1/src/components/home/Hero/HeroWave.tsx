import styles from './hero.module.scss'

const HeroWave = () => {

    return (
        <div className={styles.wave}>

            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                overflow="auto"
                shapeRendering="auto"
            >
                <defs>
                    <path
                        id="wavepath"
                        d="M 0 2000 0 500 Q 122.5 436 245 500 t 245 0 245 0 245 0 245 0 245 0 245 0  v1000 z"
                    />
                    <path id="motionpath" d="M -490 0 0 0" />
                </defs>
                <g>
                    <use xlinkHref="#wavepath" y="7">
                        <animateMotion dur="5s" repeatCount="indefinite">
                            <mpath xlinkHref="#motionpath" />
                        </animateMotion>
                    </use>
                </g>
            </svg>
        </div>
    )
}

export default HeroWave
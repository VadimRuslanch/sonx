import styles from './videoSlider.module.sass'

function VidoeSlider() {
    return (
        <div className={styles.video}>
            <iframe className={styles.videoIframe}

                    loading="lazy"
                    frameBorder="0"
                    src="https://www.youtube.com/embed/qzGXjV9Tbwc?si=frCM8anPPCtoCv9W"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen/>
        </div>
    )
}

export default VidoeSlider;
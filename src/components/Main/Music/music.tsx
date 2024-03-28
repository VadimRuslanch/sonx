import styles from './music.module.sass'

function MusicComponent() {
    return (
        <section className={styles.musicContainer}>
            <h2 className={styles.title}>Music</h2>
            <div className={styles.playerContainer}>
                <span className={styles.albumName}>Blinding Lights</span>

                <div className={styles.player}>Твои любимые песни</div>
            </div>

            <div className={styles.playerContainer}>
                <span className={styles.albumName}>Prismatic Effect</span>

                <div className={styles.player}>Твои любимые песни</div>
            </div>


        </section>
    )
}

export default MusicComponent
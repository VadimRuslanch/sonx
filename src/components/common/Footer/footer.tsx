import styles from './footer.module.sass'


import LinkBarContainer from "@/components/common/Footer/LinkBar/linkBar"

function FooterComponent() {
    return (
        <footer className={styles.footer}>

            <div className={styles.footerContainer}>
                <LinkBarContainer/>
                <p className={styles.text}>
                    The Trio Sonx
                    <br/>
                    Cover-trio SONX
                </p>
            </div>
        </footer>
    )
}

export default FooterComponent
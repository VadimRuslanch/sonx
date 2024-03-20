import common from '@/assets/styles/common.module.sass'
import styles from './footer.module.sass'


import LinkBarContainer from "@/components/common/Footer/LinkBar/linkBar"

function FooterComponent() {
    return (
        <footer className={styles.footer}>

                <div className={styles.footerContainer}>
                    <LinkBarContainer/>
                    <p className={styles.text}>© The Three Musketeers 2023, All Rights Reserved</p>
                </div>
        </footer>
    )
}

export default FooterComponent
import styles from './footer.module.sass'

import LinkBarContainer from "@/components/common/Footer/LinkBar/linkBar";


function FooterComponent() {
    return (
        <footer className={styles.footer}>
            <LinkBarContainer/>
            <p>© The Three Musketeers 2023, All Rights Reserved</p>
        </footer>
    )
}

export default FooterComponent
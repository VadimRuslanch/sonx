import styles from './footer.module.sass'
import SidebarLinks from "@/components/common/Main/Sidebar/sidebat";

function FooterComponent() {
    return (
        <footer className={styles.footer}>
            <p>© The Three Musketeers 2023, All Rights Reserved</p>
        </footer>
    )
}

export default FooterComponent
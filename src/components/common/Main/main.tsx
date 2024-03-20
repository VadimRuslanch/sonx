import styles from './main.module.sass'
import Intro from "@/components/common/Main/Intro/intro";
import SidebarLinks from "@/components/common/Main/Sidebar/sidebat";
import InfoPressKitComponent from "@/components/common/Main/InfoPressKit/infoPressKit";
import ContactComponent from "@/components/common/Main/Contact/contact";

function MainComponent(): JSX.Element {
    return (
        <main className={styles.main}>
            <Intro/>
            <InfoPressKitComponent/>
            <ContactComponent/>
            <SidebarLinks/>
        </main>
    )
}

export default MainComponent
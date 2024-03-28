import styles from './main.module.sass'
import Intro from "@/components/Main/Intro/intro";
import SidebarLinks from "@/components/Main/Sidebar/sidebat";
import InfoPressKitComponent from "@/components/Main/InfoPressKit/infoPressKit";
import ContactComponent from "@/components/Main/Contact/contact";

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
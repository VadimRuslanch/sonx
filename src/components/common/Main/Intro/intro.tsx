import styles from './intro.module.sass'
import Sidebar from '@/components/common/Main/Sidebar/sidebat'
import NewSingle from "@/components/common/Main/Intro/NewSingle/newSingle";

function Intro(): JSX.Element {
    return (
        <div className={styles.intro}>
            {/*<Sidebar/>*/}
            {/*<NewSingle/>*/}
        </div>
    )
};
export default Intro
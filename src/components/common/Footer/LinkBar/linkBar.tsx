import styles from './linkBar.module.sass'

import youtube from '@/assets/images/icons/footer/social-icon-youtube.svg'
import vk from '@/assets/images/icons/footer/social-icon-vk.svg'
import Image from "next/image";

function LinkBarContainer() {
    return (
        <div className={styles.linksContainer}>

            <a className={styles.link} href='https://www.youtube.com/@sonxtrio' target="_blank">
                <Image className={styles.linkIcon} src={youtube} alt='Иконка YouTube'/>
            </a>

            <a className={styles.link} href='https://vk.com/sonx.trio' target="_blank">
                <Image className={styles.linkIcon} src={vk} alt='Иконка VK'/>
            </a>

        </div>
    )
}

export default LinkBarContainer;
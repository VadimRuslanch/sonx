import Image from 'next/image'
import style from './sidebat.module.sass'
// import appleMusic from '@/assets/images/icons/social-icon-apple-music.svg'
// import facebook from '@/assets/images/icons/social-icon-facebook.svg'
// import instagram from '@/assets/images/icons/social-icon-instagram.svg'
// import soundcloud from '@/assets/images/icons/social-icon-soundcloud.svg'
// import spotify from '@/assets/images/icons/social-icon-spotify.svg'
// import twitter from '@/assets/images/icons/social-icon-twitter.svg'
import youtube from '@/assets/images/icons/social-icon-youtube.svg'
import vk from '@/assets/images/icons/social-icon-vk.svg'

function SidebarLinks(): JSX.Element {
    return (
        <div className={style.sidebarContainer}>

            <a className={style.link} href='https://www.youtube.com/@sonxtrio' target="_blank">
                <Image className={style.linkIcon} src={youtube} alt='Иконка YouTube'/>
            </a>

            <a className={style.link} href='https://vk.com/sonx.trio' target="_blank">
                <Image className={style.linkIcon} src={vk} alt='Иконка VK'/>
            </a>

        </div>
    )
}

export default SidebarLinks
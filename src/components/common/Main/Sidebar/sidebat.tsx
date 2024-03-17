import Link from 'next/link'
import Image from 'next/image'
import style from './sidebat.module.sass'
import appleMusic from '@/assets/images/social-icon-apple-music.svg'
import facebook from '@/assets/images/social-icon-facebook.svg'
import instagram from '@/assets/images/social-icon-instagram.svg'
import soundcloud from '@/assets/images/social-icon-soundcloud.svg'
import spotify from '@/assets/images/social-icon-spotify.svg'
import twitter from '@/assets/images/social-icon-twitter.svg'
import youtube from '@/assets/images/social-icon-youtube.svg'

function SidebarLinks(): JSX.Element {
    return (
        <div className={style.sidebarContainer}>
            <Link className={style.link} href='#'>
                <Image className={style.linkIcon} src={facebook} alt='Иконка Фэйсбук'/>
            </Link>
            <Link className={style.link} href='#'>
                <Image className={style.linkIcon} src={instagram} alt='Иконка Фэйсбук'/>
            </Link>
            <Link className={style.link} href='#'>
                <Image className={style.linkIcon} src={appleMusic} alt='Иконка Фэйсбук'/>
            </Link>
            <Link className={style.link} href='#'>
                <Image className={style.linkIcon} src={soundcloud} alt='Иконка Фэйсбук'/>
            </Link>
            <Link className={style.link} href='#'>
                <Image className={style.linkIcon} src={spotify} alt='Иконка Фэйсбук'/>
            </Link>
            <Link className={style.link} href='#'>
                <Image className={style.linkIcon} src={twitter} alt='Иконка Фэйсбук'/>
            </Link>
            <Link className={style.link} href='#'>
                <Image className={style.linkIcon} src={youtube} alt='Иконка Фэйсбук'/>
            </Link>
        </div>
    )
}

export default SidebarLinks
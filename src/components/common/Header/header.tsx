import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.sass'
import logo from '@/assets/images/logo-header.svg'

function HeaderComponent(): JSX.Element {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>

                {/*<Link className={styles.logoContainer} href={'/'}>*/}

                {/*    <Image alt='Твой логотип' src={logo} width={345} height={17}/>*/}

                {/*</Link>*/}


                {/*<div className={styles.menu}>*/}

                {/*    <Link href='#' className={styles.link}>Home</Link>*/}
                {/*    <Link href='#' className={styles.link}>Music</Link>*/}
                {/*    <Link href='#' className={styles.link}>Epk</Link>*/}
                {/*    <Link href='#' className={styles.link}>Contact us</Link>*/}

                {/*</div>*/}
            </div>
        </header>
    )
}

export default HeaderComponent
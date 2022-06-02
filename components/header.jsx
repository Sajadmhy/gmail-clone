import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header(props) {
    return(
        <div id={styles.header}>
        <button className={styles.headerItem} onClick={() => props.setShowNav(s => !s)}>📰<span className={styles.tooltiptext}>Menu</span></button>
        <button className={styles.headerItem2}>
          <span className={styles.img}>
          <Image
          src="/favicon.webp"
          width={40}
          height={28}
          alt="gmail icon"
          />
          </span>
          <p className={styles.gmail}>Gmail</p>
        </button>
        <button className={styles.searchIcon}>🔍</button>
        <input className={styles.searchBar} type="text" placeholder='Search mail'/>
        <button className={styles.searchSetting}>⚙</button>
        <button className={styles.headerItem}><span className={styles.tooltiptext}>Support</span>✋</button>
        <button className={styles.headerItem}>👩‍🔧<span className={styles.tooltiptext}>Settings</span></button>
        <button className={styles.headerItem}>🎮<span className={styles.tooltiptext}>Google Apps</span></button>
        <button className={styles.headerProfile}>
          <Image
          src="/profile1.png"
          width={50}
          height={50}
          alt="profile picture"
          />
        </button>
      </div>
    )
}
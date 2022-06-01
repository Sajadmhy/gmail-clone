import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
    return(
        <div id={styles.header}>
        <button className={styles.headerItem}>📰</button>
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
        <button className={styles.headerItem}>✋</button>
        <button className={styles.headerItem}>👩‍🔧</button>
        <button className={styles.headerItem}>🎮</button>
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
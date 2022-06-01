import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gmail Clone</title>
        <meta name="description" content="Gmail clone" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
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
      <div id={styles.nav}>
        <button className={styles.compose}>✍<span className={styles.span} id={styles.compose}>Compose</span></button>
        <button className={styles.items}>📥<span className={styles.span}>Inbox</span></button>
        <button className={styles.items}>⭐<span className={styles.span}>Starred</span></button>
        <button className={styles.items}>😴<span className={styles.span}>Snoozed</span></button>
        <button className={styles.items}>🚀<span className={styles.span}>Sent</span></button>
        <button className={styles.items}>💌<span className={styles.span}>Drafts</span></button>
        <button className={styles.items}>🔽<span className={styles.span}>More</span></button>
      </div>
    </div>
  )
}

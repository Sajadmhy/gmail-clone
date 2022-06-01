import styles from '../styles/Navbar.module.css'

export default function Navbar () {
    return (
      <div id={styles.nav}>
        <button className={styles.compose}>✍<span className={styles.span} id={styles.compose}>Compose</span></button>
        <button className={styles.items}>📥<span className={styles.span}>Inbox</span></button>
        <button className={styles.items}>⭐<span className={styles.span}>Starred</span></button>
        <button className={styles.items}>😴<span className={styles.span}>Snoozed</span></button>
        <button className={styles.items}>🚀<span className={styles.span}>Sent</span></button>
        <button className={styles.items}>💌<span className={styles.span}>Drafts</span></button>
        <button className={styles.items}>🔽<span className={styles.span}>More</span></button>
      </div>
    )
}


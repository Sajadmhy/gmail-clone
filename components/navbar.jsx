import styles from '../styles/Navbar.module.css'

export default function Navbar (props) {
    return (
      <div id={ props.showNav ? styles.wide : styles.nav}>
        <button className={styles.compose}>✍<span className={styles.span}>Compose</span></button>
        <button className={styles.items}>📥<span className={styles.span}>Inbox</span></button>
        <button className={styles.items}>⭐<span className={styles.span}>Starred</span></button>
        <button className={styles.items}>😴<span className={styles.span}>Snoozed</span></button>
        <button className={styles.items}>🚀<span className={styles.span}>Sent</span></button>
        <button className={styles.items}>💌<span className={styles.span}>Drafts</span></button>
        <button className={styles.items} onClick={() => props.setShowMore (s => !s)}>🔽<span className={styles.span}>More</span></button>
        <button style={{ display : props.showMore ? 'inline' : 'none' }} className={styles.items}>🛎️<span className={styles.span}>Important</span></button>
        <button style={{ display : props.showMore ? 'inline' : 'none' }} className={styles.items}>💀<span className={styles.span}>Spam</span></button>
        <button style={{ display : props.showMore ? 'inline' : 'none' }} className={styles.items}>🗑️<span className={styles.span}>Trash</span></button>
      </div>
    )
}


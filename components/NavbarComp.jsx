import styles from '../styles/Navbar.module.css'
import { ThemeContext } from '../pages'
import { useContext } from 'react'
import { themeConst } from '../theme/themeConst';

export default function Navbar(props) {
    
  const [theme] = useContext(ThemeContext);
  
  return (
      <div id={ props.showNav ? styles.wide : styles.nav} style={{ height: !props.showMore ? '420px' : '580px', backgroundColor: theme ? themeConst.dark.module : themeConst.light.module }}>
        <button className={styles.compose} onClick={() => props.setNewEmail(s => !s)}>✍<span className={styles.spanCompose}>Compose</span></button>
        <button className={styles.items}>📥<span className={styles.span}>Inbox{' '}({props.mails.length})</span></button>
        <button className={styles.items}>⭐<span className={styles.span}>Starred</span></button>
        <button className={styles.items}>😴<span className={styles.span}>Snoozed</span></button>
        <button className={styles.items}>🚀<span className={styles.span}>Sent</span></button>
        <button className={styles.items}>💌<span className={styles.span}>Drafts</span></button>
        <button className={styles.items} onClick={() => props.setShowMore(s => !s)}>
          {props.showMore? '🔼' : '🔽'}<span className={styles.span}>{props.showMore ? 'Less' : 'More'}</span></button>
        <button style={{ display : props.showMore ? 'inline' : 'none' }} className={styles.items}>🛎️<span className={styles.span}>Important</span></button>
        <button style={{ display : props.showMore ? 'inline' : 'none' }} className={styles.items}>💀<span className={styles.span}>Spam</span></button>
        <button style={{ display : props.showMore ? 'inline' : 'none' }} className={styles.items}>🗑️<span className={styles.span}>Trash</span></button>
      </div>
    )
}


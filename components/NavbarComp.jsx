import styles from '../styles/Navbar.module.css'
import { ThemeContext } from '../pages'
import { useContext } from 'react'
import { themeConst } from '../theme/themeConst';
import { MailContext } from '../pages';
import { ContentContext } from '../pages';

export default function Navbar(props) {
    
  const [theme] = useContext(ThemeContext);
  const [mails] = useContext(MailContext);
  const [contents , setContent] = useContext(ContentContext);

  const handleSelect = (e) => {
    const newCont = [false, false, false, false, false, false, false, false];
    newCont[e] = true;
    setContent(newCont);
  }

  return (
      <div id={ props.showNav ? styles.wide : styles.nav} style={{ height: !props.showMore ? '420px' : '580px', backgroundColor: theme ? themeConst.dark.module : themeConst.light.module }}>
        <button className={styles.compose} onClick={() => props.setNewEmail(s => !s)}>✍<span className={styles.spanCompose}>Compose</span></button>
        <button className={`${styles.items} ${contents[0] ? styles.selected : null}`} onClick={() => handleSelect(0)} >📥<span className={styles.span}>Inbox{' '}({mails.length})</span></button>
        <button className={`${styles.items} ${contents[1] ? styles.selected : null}`} onClick={() => handleSelect(1)}>⭐<span className={styles.span}>Starred</span></button>
        <button className={`${styles.items} ${contents[2] ? styles.selected : null}`} onClick={() => handleSelect(2)}>😴<span className={styles.span}>Snoozed</span></button>
        <button className={`${styles.items} ${contents[3] ? styles.selected : null}`} onClick={() => handleSelect(3)}>🚀<span className={styles.span}>Sent</span></button>
        <button className={`${styles.items} ${contents[4] ? styles.selected : null}`} onClick={() => handleSelect(4)}>💌<span className={styles.span}>Drafts</span></button>
        <button className={styles.items} onClick={() => props.setShowMore(s => !s)}>
          {props.showMore? '🔼' : '🔽'}<span className={styles.span}>{props.showMore ? 'Less' : 'More'}</span></button>
        <button style={{ display : props.showMore ? 'inline' : 'none' }} className={`${styles.items} ${contents[5] ? styles.selected : null}`} onClick={() => handleSelect(5)}>🛎️<span className={styles.span}>Important</span></button>
        <button style={{ display : props.showMore ? 'inline' : 'none' }} className={`${styles.items} ${contents[6] ? styles.selected : null}`} onClick={() => handleSelect(6)}>💀<span className={styles.span}>Spam</span></button>
        <button style={{ display : props.showMore ? 'inline' : 'none' }} className={`${styles.items} ${contents[7] ? styles.selected : null}`} onClick={() => handleSelect(7)}>🗑️<span className={styles.span}>Trash</span></button>
      </div>
    )
}


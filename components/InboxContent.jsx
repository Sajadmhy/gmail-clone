import styles from '../styles/Content.module.css';
import NewEmailCompose from './NewEmailCompose';
import { ThemeContext } from '../pages';
import { themeConst } from '../theme/themeConst';
import { useContext, useState } from 'react';
import { MailContext, ContentContext } from '../pages';

export default function InboxContent(props) {
    const [theme] = useContext(ThemeContext);
    const [checkAll, setCheckAll] = useState(false);
    const [mails] = useContext(MailContext);
    const [checkMail, setCheckMail] = useState(mails.map(() => false))
    const [contents, setContent] = useContext(ContentContext);

    const handleCheckAll = () => {
      setCheckAll(s => !s)
      setCheckMail(mails.map(() => !checkAll))
    }

    const handleCheckMail = (index) => {
      const checks = [...checkMail]
      if (checks[index] === true ) {
        checks[index] = false;
        setCheckMail(checks)
      } else { 
        checks[index] = true
        setCheckMail(checks)
       }
    }

    return (
      <div className={props.showNav ? styles.container2 : styles.container1}>
        <div id={styles.contentHead} style={{backgroundColor: theme ? themeConst.dark.module : themeConst.light.module}}>
            <div className={styles.headItem}>
                <input className={styles.checkbox} value={checkAll} onChange={handleCheckAll} type="checkbox"/>
            </div>
            <button className={styles.headItem}>↻</button>
            <button className={styles.headItem}>⚉</button>
            <span className={styles.space}></span>
            <button className={styles.headItem}>⌨</button>
        </div>
        <div className={styles.content}>
         {contents[0] && mails.map((value,index) => (            
              <div key={index} className={styles.mail}>
          <span className={styles.mailCheck}><input value={checkMail[index]} checked={checkMail[index]} onChange={() => handleCheckMail(index)} className={styles.checkbox2} type="checkbox"/></span>
          <span><button className={styles.mailStar}>⭐</button></span>
          <span style={{color: theme ? themeConst.dark.text : themeConst.light.text}} className={styles.mailSubject}>{value.subject}</span>
          <span style={{color: theme ? themeConst.dark.text : themeConst.light.text}} className={styles.mailText}>{value.text}</span>
          <button className={styles.mailOptions}>🛎️</button>
          <button className={styles.mailOptions}>🗑️</button>
          <button className={styles.mailOptions}>💀</button>
          <button className={styles.mailOptions}>⏰</button>
          <span style={{color: theme ? themeConst.dark.text : themeConst.light.text}} className={styles.mailDate}>{value.date}</span>
              </div>
              )
            ).reverse()}
            {
              contents[1] && <div className={styles.mail}>There no Starred messages yet</div>
            }
            {
              contents[2] && <div className={styles.mail}>There no Snoozed messages yet</div>
            }
            {
              contents[3] && <div className={styles.mail}>There no Sent messages yet</div>
            }
            {
              contents[4] && <div className={styles.mail}>There no Draft messages yet</div>
            }
            {
              contents[5] && <div className={styles.mail}>There no Important messages yet</div>
            }
            {
              contents[6] && <div className={styles.mail}>There no Spam messages yet</div>
            }
            {
              contents[7] && <div className={styles.mail}>There no Trash messages yet</div>
            }
          <div className={styles.footer}><p>Made with <span>❤</span> by <a href='https://github.com/sajadmhy'>Sajad Mahyaei</a></p></div>
        </div>
        <NewEmailCompose newEmail={props.newEmail} setNewEmail={props.setNewEmail}/>
      </div>
    )
}
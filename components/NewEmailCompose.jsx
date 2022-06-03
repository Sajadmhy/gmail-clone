import styles from '../styles/NewEmailCompose.module.css';

export default function NewEmailCompose(props) {
    if (!props.newEmail) {
        return null;
    } else {
        return (
            <div className={styles.container}>
          <form className={styles.newEmail}>
            <legend className={styles.legend}>
              New Message
              <span className={styles.space}></span>
              <button type='button' className={styles.full}><span>+</span></button>
              <button type='button' className={styles.min}><span>-</span></button>
              <button type='button' className={styles.close} onClick={() => props.setNewEmail(false)}><span>x</span></button>
            </legend>
            <input type="mail" placeholder='To' className={styles.formItem}/>
            <input type="text" className={styles.formItem} placeholder='Subject'/>
            <textarea className={styles.formItem2} name="email" id="newEmailText" cols="30" rows="10"></textarea>
            <div className={styles.formItem3}>
              <button type='button'>Send</button>
              <button type='button'>🧷</button>
              <span className={styles.formItem3Space}></span>
              <button type='button' onClick={() => props.setNewEmail(false)}>🗑️</button>
            </div>
          </form>
        </div>
    )
  }
}
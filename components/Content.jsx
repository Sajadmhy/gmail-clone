import styles from '../styles/Content.module.css';

export default function Content(props) {
  const iterate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20];

    return (
      <div className={props.showNav ? styles.container2 : styles.container1}>
        <div id={styles.contentHead}>
            <div className={styles.headItem}>
                <input className={styles.checkbox} type="checkbox"/>
            </div>
            <button className={styles.headItem}>↻</button>
            <button className={styles.headItem}>⚉</button>
            <span className={styles.space}></span>
            <button className={styles.headItem}>⌨</button>
        </div>
        <div className={styles.content}>
          {
            iterate.map((value,index) => { return (            
              <div key={index} className={styles.mail}>
          <span className={styles.mailCheck}><input className={styles.checkbox2} type="checkbox"/></span>
          <span><button className={styles.mailStar}>⭐</button></span>
          <span className={styles.mailSubject}>GitHub</span>
          <span className={styles.mailText}>[GitHub] A third-party OAuth application has been added to your account</span>
          <button className={styles.mailOptions}>🗄️</button>
          <button className={styles.mailOptions}>🗑️</button>
          <button className={styles.mailOptions}>📖</button>
          <button className={styles.mailOptions}>⏰</button>
          <span className={styles.mailDate}>May 31</span>
              </div>
              )
            })
          }
          <div className={styles.footer}><p>Made with <span>❤</span> by <a href='https://github.com/sajadmhy'>Sajad Mahyaei</a></p></div>
        </div>
      </div>
    )
}
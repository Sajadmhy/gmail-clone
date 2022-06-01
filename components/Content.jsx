import styles from '../styles/Content.module.css';

export default function Content() {

    return (
      <>
        <div id={styles.contentHead}>
            <div className={styles.headItem}>
                <input className={styles.checkbox} type="checkbox"/>
            </div>
            <button className={styles.headItem}>↻</button>
            <button className={styles.headItem}>⚉</button>
            <span className={styles.space}></span>
            <button className={styles.headItem}>⌨</button>
        </div>
      </>
    )
}
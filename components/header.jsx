import Image from 'next/image';
import styles from '../styles/Header.module.css';
import { useState, useRef, useEffect } from 'react';


export default function Header(props) {
    
  const refSupport = useRef();
  const refSettings = useRef();
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (props.showSupport && refSupport.current && !refSupport.current.contains(e.target)) {
        props.setShowSupport(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [props.showSupport])
  

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (props.showSettings && refSettings.current && !refSettings.current.contains(e.target)) {
        props.setShowSettings(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [props.showSettings])
  

  const toggleCheckbox = () => {
    setIsChecked(s => !s)
  }

  return(
        <div id={styles.header}>
        <button className={styles.headerItem} onClick={() => props.setShowNav(s => !s)}>📰<span className={styles.tooltiptext}>Menu</span></button>
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
        <button className={styles.searchIcon}>🔍<span className={styles.tooltiptext}>Search</span></button>
        <input className={styles.searchBar} type="text" placeholder='Search mail'/>
        <button className={styles.searchSetting}>⚙<span className={styles.tooltiptext}>Show Search Options</span></button>
        <button className={styles.headerItem} onClick={() => props.setShowSupport(s => !s)}><span className={styles.tooltiptext}>Support</span>✋</button>
        {!props.showSupport? " " : 
        <div className={styles.showSupport} ref={refSupport} >
          <div>Help</div>
          <div>Training</div>
          <div>Updates</div>
          <div><a href="mailto:sajad.mahyaei@gmail.com">Send feedback to me</a></div>
        </div>
        }
        
        <button className={styles.headerItem} onClick={() => props.setShowSettings(s => !s)}>👩‍🔧<span className={styles.tooltiptext}>Settings</span></button>
        {!props.showSettings? " " : 
        <div className={styles.showSettings} ref={refSettings} >
          <div>Dark Mode</div>
          <label className={styles.switch}><input type="checkbox" className={styles.input} 
          checked={isChecked} onChange={toggleCheckbox}/><span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
        }


        <button className={styles.headerItem}>🎮<span className={styles.tooltiptext}>Google Apps</span></button>
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
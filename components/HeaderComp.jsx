import Image from 'next/image';
import styles from '../styles/Header.module.css';
import { useState, useRef, useEffect, useContext } from 'react';
import { themeConst } from '../theme/themeConst';
import { ThemeContext } from '../pages/index';

export default function Header(props) {
    
  const refSupport = useRef();
  const refSettings = useRef();
  const refProfile = useRef();
  const refSupportBtn = useRef();
  const refSettingsBtn = useRef();
  const refProfileBtn = useRef();

  const [theme, setTheme] = useContext(ThemeContext);

  // closes Support modal when clicked outside the modal
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (props.showSupport && refSupport.current && !refSupport.current.contains(e.target) 
      && !refSupportBtn.current.contains(e.target)) {
        props.setShowSupport(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [props.showSupport])
  
// closes Setting modal when clicked outside the modal
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (props.showSettings && refSettings.current && !refSettings.current.contains(e.target)
       && !refSettingsBtn.current.contains(e.target)) {
        props.setShowSettings(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [props.showSettings])
  
// closes Profile modal when clicked outside the modal
  useEffect(() => {
  const checkIfClickedOutside = e => {
    if (props.showProfile && refProfile.current && !refProfile.current.contains(e.target) 
    && !refProfileBtn.current.contains(e.target)) {
      props.setShowProfile(false)
    }
  }

  document.addEventListener("mousedown", checkIfClickedOutside)

  return () => {
    document.removeEventListener("mousedown", checkIfClickedOutside)
  }
}, [props.showProfile])  

  const toggleCheckbox = () => {
    props.setIsChecked(s => !s)
    setTheme(s => !s);
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
            <p style={{color: theme ? themeConst.dark.text : themeConst.light.text}} className={styles.gmail}>Gmail</p>
          </button>
          <button className={styles.searchIcon}>🔍<span className={styles.tooltiptext}>Search</span></button>
          <input style={{backgroundColor: theme ? themeConst.dark.module : themeConst.light.module}} 
          className={styles.searchBar} type="text" placeholder='Search mail'/>
          <button className={styles.searchSetting}>⚙<span className={styles.tooltiptext}>Show Search Options</span></button>
          <button ref={refSupportBtn} className={styles.headerItem} onClick={() => props.setShowSupport(s => !s)}>
            <span className={styles.tooltiptext}>Support</span>✋</button>
          {!props.showSupport? " " : 
          <div style={{backgroundColor: theme ? themeConst.dark.bgc : themeConst.light.bgc}} className={styles.showSupport} ref={refSupport} >
            <div style={{color: theme ? themeConst.dark.text : themeConst.light.text}}>Help</div>
            <div style={{color: theme ? themeConst.dark.text : themeConst.light.text}}>Training</div>
            <div style={{color: theme ? themeConst.dark.text : themeConst.light.text}}>Updates</div>
            <div style={{color: theme ? themeConst.dark.text : themeConst.light.text}}><a href="mailto:hi@sajad.codes">Send feedback to me</a></div>
        </div>
        }
        
        <button ref={refSettingsBtn} className={styles.headerItem} onClick={() => props.setShowSettings(s => !s)}>
          👩‍🔧<span className={styles.tooltiptext}>Settings</span></button>
        {!props.showSettings? " " : 
        <div style={{backgroundColor: theme ? themeConst.dark.bgc : themeConst.light.bgc}} className={styles.showSettings} ref={refSettings} >
          <div style={{color: theme ? themeConst.dark.text : themeConst.light.text}}>Dark Mode</div>
          <label className={styles.switch}><input type="checkbox" className={styles.input} 
          checked={props.isChecked} onChange={toggleCheckbox}/><span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
        }


        <button className={styles.headerItem}>🎮<span className={styles.tooltiptext}>Google Apps</span></button>
        <button ref={refProfileBtn} className={styles.headerProfile} onClick={() => props.setShowProfile(s => !s)}>
          <Image
          src="/profile1.png"
          width={50}
          height={50}
          alt="profile picture"
          />
        </button>
        {!props.showProfile? " " : 
        <div 
        style={{backgroundColor: theme ? themeConst.dark.bgc : themeConst.light.bgc}}
        className={styles.showProfile} ref={refProfile} >
          <div>
          <Image
          src='/profile.png'
          width={80}
          height={80}
          alt="profile picture"
          />
          </div>
          <div style={{color: theme ? themeConst.dark.text : themeConst.light.text}}>Sajad Mahyaei</div>
          <div style={{color: theme ? themeConst.dark.text : themeConst.light.text}}>sajad.mahyaei@gmail.com</div>
          <button style={{color: theme ? themeConst.dark.text : themeConst.light.text}}>Log out</button>
        </div>
        }
      </div>
    )
}
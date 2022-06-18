import Head from 'next/head'
import { createContext, useState } from 'react'
import Content from '../components/Content.jsx'
import Header from '../components/HeaderComp.jsx'
import Navbar from '../components/NavbarComp.jsx'
import styles from '../styles/Home.module.css'
import { themeConst } from '../theme/themeConst.jsx'

export const ThemeContext = createContext();
export const MailContext = createContext();

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [newEmail, setNewEmail] = useState(false);
  const [mails, setMails] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20]);
  const [showSupport, setShowSupport] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  const [theme, setTheme] = useState(false);
  
  return (
    <ThemeContext.Provider value={[theme,setTheme]}>
      <MailContext.Provider value={[mails]}>
        <div style={{backgroundColor: theme ? themeConst.dark.bgc : themeConst.light.bgc}} className={styles.container}>
          <Head>
            <title>Gmail Clone</title>
            <meta name="description" content="Gmail clone" />
            <link rel="icon" href="/favicon.webp" />
          </Head>
          <div className={styles.header} ><Header setShowNav={setShowNav}
          showSupport={showSupport} setShowSupport={setShowSupport} 
          showSettings={showSettings} setShowSettings={setShowSettings}
          isChecked={isChecked} setIsChecked={setIsChecked} showProfile={showProfile}
          setShowProfile={setShowProfile} /></div>
          <div className={styles.main}>
            <div className={styles.navbar}><Navbar showNav={showNav} 
            showMore={showMore} setShowMore={setShowMore} setNewEmail={setNewEmail}
            mails={mails} /></div>
            <div className={styles.content}><Content showNav={showNav} 
            newEmail={newEmail} setNewEmail={setNewEmail} mails={mails}/></div>
          </div>
        </div>
      </MailContext.Provider>
    </ThemeContext.Provider>
  )
}

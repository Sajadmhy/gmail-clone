import Head from 'next/head'
import { useState } from 'react'
import Content from '../components/Content.jsx'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import styles from '../styles/Home.module.css'

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

  return (
    <div className={styles.container}>
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
  )
}

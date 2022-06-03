import Head from 'next/head'
import { useState } from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [newEmail, setNewEmail] = useState(false);


  return (
    <div className={styles.container}>
      <Head>
        <title>Gmail Clone</title>
        <meta name="description" content="Gmail clone" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <div className={styles.header}><Header setShowNav={setShowNav}/></div>
      <div className={styles.main}>
        <div className={styles.navbar}><Navbar showNav={showNav} 
        showMore={showMore} setShowMore={setShowMore} setNewEmail={setNewEmail} /></div>
        <div className={styles.content}><Content showNav={showNav} 
        newEmail={newEmail} setNewEmail={setNewEmail}/></div>
      </div>
    </div>
  )
}

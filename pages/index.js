import Head from 'next/head'
import Header from '../components/header'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gmail Clone</title>
        <meta name="description" content="Gmail clone" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <Header/>
      <Navbar/>
    </div>
  )
}

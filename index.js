
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dawaai | Medicine Search</title>
        <meta name="description" content="Search medicines by name and location" />
      </Head>
      <div className={styles.hero}>
        <h1 className={styles.title}>Find Medicines Globally</h1>
        <p className={styles.subtitle}>Search and compare availability locally or online</p>
        <input className={styles.searchBox} placeholder="Enter medicine name..." />
        <Link href="/search"><button className={styles.searchButton}>Search</button></Link>
      </div>
    </>
  )
}

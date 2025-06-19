
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/"><h2 className={styles.logo}>Dawaai</h2></Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>© 2025 Dawaai.com</footer>
    </>
  )
}

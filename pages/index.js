import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
      <>
        <Head>
          <title>space-next</title>
          <meta name="description" content="Space-X API" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.index}>
          <div className={styles.index__header}>
            <span className={styles.index__header_title}>space-next</span>
            <span className={styles.index__header_description}>your minimalistic Next.js website with SpaceX API</span>
          </div>
        </div>
      </>

      
  )
}

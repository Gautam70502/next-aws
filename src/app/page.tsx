import Head from 'next/head'

import styles from '@/styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing
          {` `}
          <code className={styles.code}>src/app/page.tsx</code>
        </p>

        <p className={styles.description}>This is not an official starter!!!!!!!!!!!!!This is not an official starter!</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js Next.js Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=typescript-nextjs-starter"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
          <a
            href="https://vercel.com/docs/concepts/functions/serverless-functions"
            className={styles.card}
          >
            <h3>Serverless Function &rarr;</h3>
            <p>Running code on-demand without needing to manage your own infrastructure.</p>
          </a>
          <a
            href="https://vercel.com/docs/concepts/functions/edge-functions"
            className={styles.card}
          >
            <h3>Edge Function &rarr;</h3>
            <p>Deliver dynamic, personalized content with the lightweight Edge Runtime.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {` `}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

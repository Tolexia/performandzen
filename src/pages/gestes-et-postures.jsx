import Head from 'next/head'

import { Inter } from '@next/font/google'
import Link from 'next/link';
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

function GestesEtPostures(pageProps) {
  return (
    <>
      <Head>
        <title>Gestes et Postures</title>
        <meta name="description" content="Prestation Gestes et Postures par Perform&Zen. Prévenez douleurs et blessures par des bonnes pratiques simples." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      <Layout>

      </Layout>
    </>
  )
}

export default GestesEtPostures;

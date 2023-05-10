import Head from 'next/head'

import { Inter } from '@next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout'
import styles from '@/styles/Prestations.module.css'

const inter = Inter({ subsets: ['latin'] })

function AmeliorationDuSommeil(pageProps) {
	const content = <div className={styles.contentformation}>
        <div className={styles.banner}>
	        <img loading = 'lazy' className={styles.panelContainer} src={"/images/visitcard_long.PNG"} alt="Image type carte de visite de la société Perform and Zen comportant sa devise : sLe corps et l'esprit au service de la performance"/>
        </div>
	<h1 className={styles.violet}>AMÉLIORATION DU SOMMEIL</h1>
	<div className={styles.bloc}>
		<p className={styles.prestationparticulier}>
            Le manque de sommeil peut avoir de lourdes
            conséquences sur votre santé mentale et physique.<br/>
            <br/>
            Cela peut aller de la difficulté à se concentrer à
            l&apos;affaiblissement du système immunitaire, jusqu&apos;à des
            risques de problèmes de santé graves.<br/>
            <br/>
            Avec l&apos;aide des techniques d&apos;optimisation du potentiel
            je peux vous aider à rétablir une bonne qualité de
            sommeil.<br/>
            <br/>
            Je suis à votre disposition pour un devis personnalisé.
        </p>
	</div>
	<div className={styles.end}>
		<h5>CONFIDENTIALITÉ - BIENVEILLANCE - ADAPTABILITÉ - ÉCOUTE - PRAGMATISME</h5>
	</div>
</div>
  return (
    <>
      <Head>
        <title>Amélioration du sommeil</title>
        <meta name="author" content="Christelle CROIZE" />
        <meta charset="utf-8" />
        <meta name="keywords" content="perform&zen, performandzen, méthode LEAN, TOP, bien-être, coaching, formation, optimisation, performance, potentiel" />
        <meta name="description" content="Prestation pour les particuliers Amélioration du sommeil par PerformandZen. Apprenez et mettez en oeuvre des techniques simples afin de rétablir une bonne qualité de sommeil." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      <Layout menu = "particulier" content = {content}>
        
      </Layout>
    </>
  )
}

export default AmeliorationDuSommeil;

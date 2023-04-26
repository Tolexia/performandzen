import Head from 'next/head'

import { Inter } from '@next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout'
import styles from '@/styles/Prestations.module.css'

const inter = Inter({ subsets: ['latin'] })

function DevelopperSesPerformances(pageProps) {
	const content = <div className={styles.contentformation}>
        <div className={styles.banner}>
	        <img loading = 'lazy' className={styles.panelContainer} src={"/images/visitcard_long.PNG"} alt="Image type carte de visite de la société Perform and Zen comportant sa devise : sLe corps et l'esprit au service de la performance"/>
        </div>
	<h1 className={styles.violet}>RÉALISATION D&apos;OBJECTIFS</h1>
    <h4>Personnels et professionnels</h4>
	<div className={styles.bloc}>
		<p className={styles.prestationparticulier}>
            Vous avez un objectif personnel ou professionnel et vous voulez mettre toutes les chances de votre côté pour l&apos;atteindre?<br/>
            Pour cela, il est important d&apos;élaborer un plan solide, de rester motivé, de rechercher les ressources nécessaires et de ne pas avoir peur de l&apos;échec.<br/>
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
        <title>Réalisation d&apos;objectifs</title>
        <meta name="description" content="Prestation pour les particuliers Réalisation d'objectifs par Perform&Zen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      <Layout menu = "particulier" content = {content}>
        
      </Layout>
    </>
  )
}

export default DevelopperSesPerformances;

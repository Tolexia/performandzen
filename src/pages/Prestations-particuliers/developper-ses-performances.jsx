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
	<h1 className={styles.violet}>DÉVELOPPER SES PERFORMANCES</h1>
    <h4>Personnelles et professionnelles</h4>
	<div className={styles.bloc}>
		<p className={styles.prestationparticulier}>
            Apprenez à éliminer les gaspillages, prévenir les problèmes, mieux vous organiser, intégrer votre bien-être au travail pour être optimum.<br/>
            <br/>
            Pour cela il existe des techniques diverses à votre disposition :<br/>
            <br/>
            LEAN Office<br/>
            Renforcement positif<br/>
            Projection Mentale de la Réussite<br/>
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
        <title>Développer ses performances</title>
        <meta name="description" content="Prestation pour les particuliers Développer ses performances par Perform&Zen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      <Layout menu = "particulier" content = {content}>
        
      </Layout>
    </>
  )
}

export default DevelopperSesPerformances;
import Head from 'next/head'

import { Inter } from '@next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout'
import styles from '@/styles/Prestations.module.css'

const inter = Inter({ subsets: ['latin'] })

function PrestationsPros(pageProps) {
	const content = 
	<div className={styles.contentformation}>
        <div className={styles.banner}>
	        <img loading = 'lazy' className={styles.panelContainer} src={"/images/visitcard_long.PNG"} alt="Image type carte de visite de la société Perform and Zen comportant sa devise : sLe corps et l'esprit au service de la performance"/>
        </div>
		<h1>PRESTATIONS AUX PARTICULIERS</h1>
		<div className={styles.bloc}>
      <h5 className={styles.links}>Liens cliquables</h5>
			<ul className={styles.dynamiclist}>
				<li><Link href = "/Prestations-particuliers/amelioration-du-sommeil" >Amélioration du sommeil</Link> </li>
				<li><Link href = "/Prestations-particuliers/developper-ses-performances" >Développer ses performances</Link> </li>
				<li><Link href = "/Prestations-particuliers/gerer-son-stress" >Gérer son stress</Link> </li>
				<li><Link href = "/Prestations-particuliers/realiser-ses-objectifs" >Réalisation d&apos;objectifs</Link> </li>
			</ul>
		</div>
	</div>
  return (
    <>
      <Head>
        <title>Prestations aux particuliers</title>
        <meta name="description" content="Prestations proposées aux particuliers Perform&Zen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      <Layout content = {content}>
        
      </Layout>
    </>
  )
}

export default PrestationsPros;

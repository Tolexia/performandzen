import Head from 'next/head'

import { Inter } from '@next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout'
import styles from '@/styles/Prestations.module.css'

const inter = Inter({ subsets: ['latin'] })

function PrestationsPros(pageProps) {
	const content = <div className={styles.contentformation}>
        <div className={styles.banner}>
	        <img loading = 'lazy' className={styles.panelContainer} src={"/images/visitcard_long.PNG"} alt="Image type carte de visite de la société Perform and Zen comportant sa devise : sLe corps et l'esprit au service de la performance"/>
        </div>
	<h1>PRESTATIONS AUX PROFESSIONNELS</h1>
	<div className={styles.bloc}>
        <ul className={styles.dynamiclist}>
            <li><Link href="/Prestations-pros/gestes-et-postures">Gestes et Postures</Link></li>
            <li><Link href = "/Prestations-pros/gestion-du-stress" >Gestion du stress</Link> </li>
            <li><Link href="/Prestations-pros/mobiliser-sereinement-ses-ressources">Mobiliser sereinement ses ressources</Link></li>
            <li><Link href="/Prestations-pros/optimisation-des-performances">Optimisation des performances</Link></li>
        </ul>
	</div>

</div>
  return (
    <>
      <Head>
        <title>Prestations aux professionnels</title>
        <meta name="description" content="Prestations proposées aux professionnels par PerformandZen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      <Layout content = {content}>
        
      </Layout>
    </>
  )
}

export default PrestationsPros;

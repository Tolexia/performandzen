import Head from 'next/head'

import { Inter } from '@next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout'
import styles from '@/styles/Prestations.module.css'

const inter = Inter({ subsets: ['latin'] })

function GererSonStress(pageProps) {
  const articleStructuredData = [{
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "Gérer son stress",
		description: 'Prestation pour particuliers "Gérer son stress", par PerformandZen.',
		image: "https://www.performandzen.fr/images/png_20220724_153350_0000.PNG",
		author: {
			"@type": "Person",
			"name": "Christelle CROIZE",
			"url": "https://www.linkedin.com/in/christelle-croize-16a37a240/"
		},
	  },
	  {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [{
		"@type": "ListItem",
		"position": 1,
		"name": "Prestations aux particuliers",
		"item": "https://www.performandzen.fr/Prestations-particuliers"
		},{
		"@type": "ListItem",
		"position": 2,
		"name": "Gérer son stress"
		}]
	}
	];
	const content = <div className={styles.contentformation}>
        <div className={styles.banner}>
	        <img loading = 'lazy' className={styles.panelContainer} src={"/images/visitcard_long.PNG"} alt="Image type carte de visite de la société Perform and Zen comportant sa devise : sLe corps et l'esprit au service de la performance"/>
        </div>
	<h1 className={styles.violet}>GÉRER SON STRESS</h1>
	<div className={styles.bloc}>
		<p className={styles.prestationparticulier} style={{color:"#55289f"}}>
            Le stress vous fait perdre votre sang-froid, vous rend irritable et nerveux? Il vous empêche de réfléchir?<br/>
            Vous vous sentez tendu?<br/>
            Le stress vous empêche de vous concentrer? Vous rend anxieux?<br/>
        </p>
	</div>
	<div className={styles.bloc}>
		<p className={styles.prestationparticulier}>
            Je peux vous aider à le gérer, à anticiper ses effets pour les atténuer.<br/>
            Ensemble nous trouverons les stratégies qui fonctionnent le mieux pour vous, à travers différentes approches.<br/>
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
        <title>Gérer son stress</title>
        <meta name="author" content="Christelle CROIZE" />
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
        <meta charset="utf-8" />
        <meta name="keywords" content="perform&zen, performandzen, méthode LEAN, TOP, bien-être, coaching, formation, optimisation, performance, potentiel" />
        <meta name="description" content="Prestation pour les particuliers Gérer son stress par PerformandZen. Apprenez à mieux gérer votre stress pour vous sentir bien et être plus efficace au quotidien." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      <Layout menu = "particulier" content = {content}>
        
      </Layout>
    </>
  )
}

export default GererSonStress;

import Head from 'next/head'

import { Inter } from '@next/font/google'
import Link from 'next/link';
import Layout from '@/components/layout'
import styles from '@/styles/Prestations.module.css'

const inter = Inter({ subsets: ['latin'] })

function OptimisationPerf(pageProps) {
	const articleStructuredData = [{
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "Optimisation des performances",
		description: 'Programme de la formation pour professionnels "Optimisation des performances", par PerformandZen.',
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
		"name": "Prestations aux professionnels",
		"item": "https://www.performandzen.fr/Prestations-pros"
		},{
		"@type": "ListItem",
		"position": 2,
		"name": "Optimisation des performances"
		}]
	}
	];
	const content = <div className={styles.contentformation}>
	<h1>PROGRAMME FORMATION</h1>
	<h1>OPTIMISATION DES PERFORMANCES</h1>
	<div className={styles.bloc}>
		<h2>OBJECTIFS</h2>
		<ul>
			<li>Identifier les facteurs limitant la performance</li>
			<li>Se connaître pour optimiser son relationnel</li>
			<li>Savoir s’affirmer positivement</li>
			<li>Savoir lâcher prise quand cela est nécessaire</li>
		</ul>
	</div>
	<hr />
	<div className={styles.bloc}>
		<h2>PUBLIC CONCERNÉ</h2>
		<p>Toute personne souhaitant améliorer ses compétences pour répondre à des objectifs</p>
		<h2>PRÉREQUIS</h2>
		<p>Aucun</p>
		<h2>DURÉE</h2>
		<p>1 journée soit 7h</p>
		<h2>DATES</h2>
		<p>A définir</p>
	</div>
	<hr />
	<div className={styles.bloc}>
		<h2>PROGRAMME - 1ère &#189; JOURNÉE</h2>
		<div className={styles.sousbloc}>
			<ul>
				<li>Présentation individuelle-mise en place du cadre de la formation</li>
				<li>Météo collective et individuelle</li>
			</ul>
		</div>
		<div className={styles.sousbloc}>
			<h4>MISE EN PRATIQUE</h4>
			<ul>
				<li>Faire une météo collective</li>
				<li>Apprendre à faire sa météo individuelle</li>
			</ul>
		</div>
	</div>
	<div className={styles.bloc}>
		<h2>PROGRAMME - 2nd &#189; JOURNÉE</h2>
		<div className={styles.sousbloc}>
			<ul>
				<li>Comprendre les différentes formes de motivations et leur processus (LEVY-LEBOYER)</li>
				<li>Comment motiver ? comment se motiver ?</li>
				<li>Savoir repérer les attitudes inapropriées</li>
				<li>Se former au renforcement positif</li>
			</ul>
		</div>
		<div className={styles.sousbloc}>
			<h4>MISE EN PRATIQUE</h4>
			<ul>
				<li>Relaxations- Renforcement positif par l’imagerie mentale</li>
			</ul>
		</div>
	</div>
	<div className={styles.bloc}>
		<div className={styles.sousbloc}>
		<h4>CONCLUSION ET BILAN</h4>
		<ul>
			<li>Echange sur les éventuelles difficultés rencontrées, la réponse aux attentes du début de la formation</li>
			<li>Recueil des ressentis</li>
		</ul>
		</div>
		<div className={styles.sousbloc}>
		<h4>MÉTHODE PÉDAGOGIQUE</h4>
		<ul>
			<li>Alternance en grands groupes et petits groupes pour les mises en pratique</li>
			<li>Mises en situation, apports pratiques, support vidéo et analyses de cas concrets</li>
		</ul>
		<p>Possibilité d&apos;aborder des sujets utiles et nécessaires, même hors programme, s&apos;ils s&apos;avèrent pertinents</p>
		</div>
	</div>
	<hr />
	<div className={styles.bloc}>
		<h2>MODALITÉ D&apos;ÉVALUATION</h2>
		<p>Questionnaire à l&apos;issue de la formation et pratique évaluée de façon sommative au cours des exercices</p>
  	</div>
	  <hr />
	<div className={styles.bloc}>
		<h2>INTERVENANT</h2>
		<p>Formation animée par un professionnel formé TOP (techniques d&apos;optimisation du potentiel)</p>
  	</div>
	  <hr />
	<div className={styles.bloc}>
		<h2>MOYENS PÉDAGOGIQUES</h2>
		<p>
			Ressource multimédia<br/>
			Divers exercices de mises en pratique
		</p>
  	</div>
	<div className={styles.end}>
		<h5>CONFIDENTIALITÉ - BIENVEILLANCE - ADAPTABILITÉ - ÉCOUTE - PRAGMATISME</h5>
	</div>
</div>
  return (
    <>
      <Head>
        <title>Optimisation des performances</title>
		<meta name="author" content="Christelle CROIZE" />
		<script type="application/ld+json">
			{JSON.stringify(articleStructuredData)}
		</script>
        <meta charset="utf-8" />
        <meta name="keywords" content="perform&zen, performandzen, méthode LEAN, TOP, bien-être, coaching, formation, optimisation, performance, potentiel" />
        <meta name="description" content='Prestation pour les professionnels "Optimisation des performances" par PerformandZen. Exploitez pleinement votre potentiel et tirez meilleur parti de vous-même.' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      <Layout menu = "pro" content = {content}>
        
      </Layout>
    </>
  )
}

export default OptimisationPerf;

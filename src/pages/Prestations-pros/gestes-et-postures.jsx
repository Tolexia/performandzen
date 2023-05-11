import Head from 'next/head'

import { Inter } from '@next/font/google'
import Link from 'next/link';
import Layout from '@/components/layout'
import styles from '@/styles/Prestations.module.css'

const inter = Inter({ subsets: ['latin'] })

function GestesEtPostures(pageProps) {
	const articleStructuredData = [{
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "Gestes et Postures",
		description: 'Programme de la formation pour professionnels "Gestes et Postures", par PerformandZen.',
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
		"name": "Gestes et Postures"
		}]
	}
	];
	const content = <div className={styles.contentformation}>
	<h1>PROGRAMME FORMATION</h1>
	<h1>GESTES ET POSTURES</h1>
	<div className={styles.bloc}>
		<h2>OBJECTIFS</h2>
		<ul>
		<li>Connaître les TMS (troubles musculo-squelettiques)</li>
		<li>Participer à l&apos;amélioration des conditions de travail pour éviter et prévenir les TMS</li>
		<li>Identifier les gestes et postures pour éviter les TMS</li>
		<li>Acquérir une méthode d&apos;auto-analyse de sa propre situation de travail</li>
		<li>Limiter les risques physiques en adaptant ces compétences sur le poste de travail</li>
		</ul>
	</div>
	<hr />
	<div className={styles.bloc}>
		<h2>PUBLIC CONCERNÉ</h2>
		<p>Toute personne dont l’activité comporte des manutentions manuelles, voulant adapter ses gestes et postures à son poste de travail</p>
		<h2>PRÉREQUIS</h2>
		<p>Aucun</p>
		<h2>DURÉE</h2>
		<p>3 heures (peut être adaptée aux spécificités du client, et au public concerné)</p>
		<h2>DATES</h2>
		<p>A définir</p>
	</div>
	<hr />
	<div className={styles.bloc}>
		<h2>PROGRAMME</h2>
		<div className={styles.sousbloc}>
		<h4>PRÉSENTATION INDIVIDUELLE - mise en place du cadre de la formation -</h4>
		<ul>
			<li>Présentation théorique des troubles musculo-squelettiques et des pathologies qui y sont liées</li>
			<li>Identification du fonctionnement du corps avec notions d’anatomie, de bio-mécanique et des pathologies au travail</li>
			<li>Sensibilisation et identification des gestes non ergonomiques</li>
			<li>Economiser ses efforts lors de port de charges</li>
			<li>Réaliser et s’approprier l’échauffement avant l’effort</li>
			<li>Savoir faire une dynamisation psycho-physiologique</li>
			<li>Savoir faire sa « propre gym »</li>
			<li>Faire une relaxation après le travail</li>
		</ul>
		</div>
		<div className={styles.sousbloc}>
		<h4>MISE EN PRATIQUE</h4>
		<ul>
			<li>Relaxations musculaires directes - dynamisation psycho-physiologique</li>
		</ul>
		</div>
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
		<p>Possibilité d’aborder des sujets utiles et nécessaires, même hors programme, s’ils s’avèrent pertinents</p>
		</div>
	</div>
	<hr />
	<div className={styles.bloc}>
		<h2>MODALITÉ D’ÉVALUATION</h2>
		<p>Questionnaire à l’issue de la formation et pratique évaluée de façon sommative au cours des exercices</p>
  	</div>
	  <hr />
	<div className={styles.bloc}>
		<h2>INTERVENANT</h2>
		<p>Formation animée par un professionnel formé TOP (techniques d‘optimisation du potentiel), formateur gestes et postures</p>
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
        <title>Gestes et Postures</title>
		<meta name="author" content="Christelle CROIZE" />
		<script type="application/ld+json">
			{JSON.stringify(articleStructuredData)}
		</script>
        <meta charset="utf-8" />
        <meta name="keywords" content="perform&zen, performandzen, méthode LEAN, TOP, bien-être, coaching, formation, optimisation, performance, potentiel" />
        <meta name="description" content="Prestation Gestes et Postures pour les professionnels par PerformandZen. Prévenez douleurs et blessures par des bonnes pratiques simples à mettre en place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      <Layout menu = "pro" content = {content}>
        
      </Layout>
    </>
  )
}

export default GestesEtPostures;

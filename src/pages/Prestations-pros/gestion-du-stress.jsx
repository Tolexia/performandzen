import Head from 'next/head'

import { Inter } from '@next/font/google'
import Link from 'next/link';
import Layout from '@/components/layout'
import styles from '@/styles/Prestations.module.css'

const inter = Inter({ subsets: ['latin'] })

function GestionDuStress(pageProps) {
	const content = <div className={styles.contentformation}>
	<h1>PROGRAMME FORMATION</h1>
	<h1>GESTIONS DU STRESS</h1>
	<div className={styles.bloc}>
		<h2>OBJECTIFS</h2>
		<ul>
		<li>Connaître les différents stress</li>
		<li>Connaître les différentes techniques d&apos;optimisation du potentiel (TOP)</li>
		<li>Identifier les facteurs de stress</li>
		<li>Acquérir une méthode d&apos;auto-analyse de son niveau de stress</li>
		<li>Mobiliser ses propres ressources psycho-cognitives, dans toute situation de stress</li>
		</ul>
	</div>
	<hr />
	<div className={styles.bloc}>
		<h2>PUBLIC CONCERNÉ</h2>
		<p>Toute personne volontaire et souhaitant gérer son stress, en toute situation</p>
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
			<li>Présentation théorique des différents stress</li>
			<li>Présentation des techniques d&apos;optimisation du potentiel (TOP)</li>
			<li>Sensibilisation et identification des différentes réactions au stress</li>
			<li>Réaliser et s&apos;approprier l&apos;échauffement avant l&apos;effort</li>
			<li>Savoir faire sa « propre météo intérieure &#187;</li>
			<li>Réaliser des respirations relaxantes et dynamisantes</li>
			<li>Faire des pré-activations mentales</li>
		</ul>
		</div>
		<div className={styles.sousbloc}>
		<h4>MISE EN PRATIQUE</h4>
		<ul>
			<li>Relaxations musculaires directes - dynamisation psycho-physiologique</li>
			<li>Respirations relaxantes et dynamisantes</li>
			<li>Pré-activations mentales</li>
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
        <title>Gestion du stress</title>
        <meta name="description" content="Prestation pour les professionnels Gestion du stress par Perform&Zen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      <Layout menu = "pro" content = {content}>
        
      </Layout>
    </>
  )
}

export default GestionDuStress;

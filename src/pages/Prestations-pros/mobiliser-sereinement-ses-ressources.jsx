import Head from 'next/head'

import { Inter } from '@next/font/google'
import Link from 'next/link';
import Layout from '@/components/layout'
import styles from '@/styles/Prestations.module.css'

const inter = Inter({ subsets: ['latin'] })

function MobilisationRessource(pageProps) {
	const content = <div className={styles.contentformation}>
	<h1>PROGRAMME FORMATION</h1>
	<h1>MOBILISER SEREINEMENT SES RESSOURCES</h1>
	<div className={styles.bloc}>
		<h2>OBJECTIFS</h2>
		<ul>
			<li>Connaître les techniques d&apos;optimisation du potentiel (TOP)</li>
			<li>Apprendre à mieux se connaître</li>
			<li>Identifier les facteurs de stress au quotidien</li>
			<li>Gérer son sommeil</li>
			<li>Intégrer les TOP dans sa vie quotidienne, personnelle et/ou professionnelle</li>
		</ul>
	</div>
	<hr />
	<div className={styles.bloc}>
		<h2>PUBLIC CONCERNÉ</h2>
		<p>Toute personne souhaitant améliorer ses performances en mobilisant au mieux ses ressources</p>
		<h2>PRÉREQUIS</h2>
		<p>Aucun</p>
		<h2>DURÉE</h2>
		<p>2 jours (14h)</p>
		<h2>DATES</h2>
		<p>A définir</p>
	</div>
	<hr />
	<div className={styles.bloc}>
		<h2>PROGRAMME - 1ère JOURNÉE</h2>
		<div className={styles.sousbloc}>
			<ul>
				<li>Présentation individuelle - mise en place du cadre de la formation</li>
				<li>Présentation des techniques d&apos;optimisation du potentiel</li>
				<li>Météo collective et individuelle</li>
				<li>Connaître les différentes respirations</li>
			</ul>
		</div>
		<div className={styles.sousbloc}>
		<h4>MISE EN PRATIQUE</h4>
			<ul>
				<li>Faire une météo collective</li>
				<li>Apprendre à faire sa météo individuelle</li>
				<li>Faire les respirations dynamisantes et relaxantes</li>
			</ul>
		</div>
	</div>
	<div className={styles.bloc}>
		<h2>PROGRAMME - 2nd JOURNÉE</h2>
		<div className={styles.sousbloc}>
			<ul>
				<li>Comprendre les différentes formes de stress et les réactions face au stress</li>
				<li>Comment gérer le stress ?</li>
				<li>Savoir évaluer la qualité de son sommeil</li>
				<li>S&apos;adapter pour améliorer la qualité de son sommeil</li>
			</ul>
		</div>
		<div className={styles.sousbloc}>
		<h4>MISE EN PRATIQUE</h4>
			<ul>
				<li>Relaxations- Dynamisation- Pré-activation mentale</li>
				<li>Questionnaire pour évaluer la qualité du sommeil</li>
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
        <title>Mobiliser sereinement ses resources</title>
        <meta name="description" content="Prestation pour les professionnels Mobiliser sereinement ses resources par Perform&Zen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      <Layout menu = "pro" content = {content}>
        
      </Layout>
    </>
  )
}

export default MobilisationRessource;

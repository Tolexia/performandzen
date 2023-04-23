import Head from 'next/head'

import { Inter } from '@next/font/google'
import Link from 'next/link';
import Layout from '@/components/layout'
import styles from '@/styles/Prestations.module.css'

const inter = Inter({ subsets: ['latin'] })

function MentionsLegales(pageProps) {
	const content = <div className={styles.contentformation}>
	<h1>MENTIONS LÉGALES</h1>
	<div className={styles.bloc}>
		<h2>ÉDITEUR DU SITE</h2>
		<p>
            Ce site est édité par <b>CROIZÉ Christelle, Entrepreneur Individuel (EI)</b>,<br/>
            représentante en la qualité de gérante de la société <b>&#171;Perform and Zen&#187;</b>,<br/>
            dont le <u>numéro RCS</u> est <b>917 490 880 00015</b><br/>
            et dont le <u>siège social</u> est situé au <b>5 rue Alfred Nobel 51350 CORMONTREUIL FRANCE</b>.<br/>
            N° de téléphone : <Link href = "tel:0675563584">+33 (0)6 75 56 35 84 </Link><br/>
            Adresse courriel : <Link href = "mailto:performandzen@gmail.com">performandzen@gmail.com</Link><br/>
            Directrice de la publication : CROIZÉ Christelle<br/>
        </p>
	</div>
	<hr />
	<div className={styles.bloc}>
		<h2>HÉBERGEUR DU SITE</h2>
		<p>
            Vercel Inc.<br/>
            340 S Lemon Ave #4133<br/>
            Walnut, CA 91789<br/>
            N° de téléphone : (559) 288-7060<br/>
            Adresse courriel : privacy@vercel.com<br/>
        </p>
	</div>
	<hr />
	<div className={styles.bloc}>
		<h2>DONNÉES PERSONNELLES</h2>
		<p>
            Ce site <b>n&apos;enregistre aucune</b> donnée personnelle permettant d&apos;identifier personnellement ses visiteurs, directement ou non, à partir de leur nom, prénom, adresse IP, ou adresse personnelle.<br/>
            Ce site utilise les technologies suivantes proposées par son hébergeur mentionné ci-dessus et nommées <b>&#171;Vercel Speed Insights&#187;</b> et <b>&#171;Vercel Web Analytics&#187;</b> dont le fonctionnement est expliqué ci-après.
        </p>
        <div className={styles.sousbloc}>
            <h4>Vercel Speed Insights</h4>
            <p>
                Cette technologie permet de mesurer les performances des différentes pages du site.<br/>
                Pour ce faire, certaines données entièrement anonymes sont récupérées telles que l&apos;url de la page, la vitesse de connexion, le navigateur, le type d&apos;appareil et le pays de connexion.<br/>
                La liste de ces données anonymes ainsi que des explications plus détaillées concernant cette technologie sont disponibles sur la page de politique de confidentialité de cette fonctionnalité sur le site vercel.com à l&apos;adresse suivante : <br/>
                <Link href = "https://vercel.com/docs/concepts/speed-insights/privacy-policy">https://vercel.com/docs/concepts/speed-insights/privacy-policy</Link>
            </p>
        </div>
        <div className={styles.sousbloc}>
            <h4>Vercel Web Analytics</h4>
            <p>
                Cette technologie permet de mesurer et quantifier le traffic des visiteurs du site.<br/>
                Pour ce faire, chaque visiteur est indentifié par un hash arbitraire défini par la requête demandée pour afficher la page et non par une de ses données personnelles telle que son adresse IP.<br/>
                Cette représentation virtuelle de l&apos;utilisateur est stockée de manière temporaire et non permanente comme dans le cas d&apos;un cookie, et est automatiquement mis au rebout au bout de 24h.<br/> 
                Certaines données entièrement anonymes sont récupérées telles que l&apos;url de la page, l&apos;url Referrer (page précédente), le navigateur, le type d&apos;appareil, la ville ainsi que le pays de connexion.<br/>
                La liste de ces données anonymes ainsi que des explications plus détaillées concernant cette technologie sont disponibles sur la page de politique de confidentialité de cette fonctionnalité sur le site vercel.com à l&apos;adresse suivante : <br/>
                <Link href = "https://vercel.com/docs/concepts/analytics/privacy-policy">https://vercel.com/docs/concepts/analytics/privacy-policy</Link>
            </p>
        </div>
	</div>
	<hr />
    <div className={styles.bloc}>
		<h2>CONDITIONS GÉNÉRALES DE VENTE</h2>
		<Link href = "/fichiers/CONDITIONS-GENERALES-DE-VENTE.pdf" download>Cliquez ici afin de télécharger les CGV</Link>
	</div>
</div>
  return (
    <>
      <Head>
        <title>Mentions légales</title>
        <meta name="description" content="Mentions légales du site performandzen.fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/images/logo.png" /> */}
      </Head>
      <Layout content = {content}>
        
      </Layout>
    </>
  )
}

export default MentionsLegales;

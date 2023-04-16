import styles from "@/styles/footer.module.css"
import Link from 'next/link'

export default function Footer()
{
    return(
    <footer className={styles.footer}>
        <div className={styles.footerLeft}>
            <h6>Perform&Zen</h6>
            <p>Perform&Zen, le corps et l&apos;esprit au service de la performance.<br/>Optimisez votre potentiel.</p>
            <span>Copyright 2023. All Rights Reserved</span>
        </div>
        <div className={styles.footerRight}>
            <div className={styles.links}>
                <Link href = "/">RGPD</Link>
                <Link href = "/">Mentions légales</Link>
            </div>
        </div>
    </footer>
    )
}
import Script from 'next/script'
import styles from "@/styles/layout.module.css";
import React, {useState,useEffect, useImperativeHandle, forwardRef} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import menuPrestationPro from './menuPrestationPro';

 const Layout = ((props, {children}) => 
{
    let [activeMenu, setactiveMenu] = useState(null);
    const lateralMenu = props.menu == "pro" ? <menuPrestationPro className = {styles.menuLateral} /> : "";
    useEffect(() => {
    }, [])
    return (
        <>
            <header className={styles.header}>
                <Image loading = 'lazy' src="/images/logo.png" width={140} height={70} className={styles.logo} alt='perform&zen logo de la marque'/>
                <nav className={styles.nav}>
                    <ul>
                        <li><a>Prestations aux professionnels</a></li>
                        <li><a>Prestations aux particuliers</a></li>
                        <li><a href = "#contact" onClick={e=>toggleActiveMenu()}>Contact</a></li>
                    </ul>
                </nav>
                <div className={styles.burger}>
                    <input type="checkbox" onChange={e => setactiveMenu(activeMenu == null ? styles.active : null)}/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul></ul>
                </div>
            </header>
            <main className={styles.main }>
                <section className={styles.lateral}>

                </section>
                <section className={styles.content}>
                    {children}
                </section>
            </main>
            <Footer />
        </>
    )
    
})
Layout.displayName = 'Layout';
export default Layout;
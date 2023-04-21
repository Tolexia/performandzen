import Script from 'next/script'
import styles from "@/styles/layout.module.css";
import React, {useState,useEffect, useImperativeHandle, forwardRef} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import MenuPrestationPro from './menuPrestationPro';

 const Layout = ((props, {children}) => 
{
    const toggleDropdown = () => {
        const menu = document.getElementById("menu"),
        splitbutton = document.getElementById("splitbutton")
        menu.classList.toggle(styles.open);
        splitbutton.classList.toggle(styles.open);
      };
    let [activeMenu, setactiveMenu] = useState(null);
    const lateralMenu = props.menu == "pro" ? <MenuPrestationPro className = {styles.menuLateral} /> : "";
    useEffect(() => {
    }, [])
    return (
        <>
            <header className={styles.header}>
                <Image loading = 'lazy' src="/images/logo.png" width={140} height={70} className={styles.logo} alt='perform&zen logo de la marque'/>
                <nav className={[styles.nav, activeMenu].join(' ')}>
                    <ul>
                        <li><Link href = "/">Accueil</Link></li>
                        <li>
                            <div id = "splitbutton" className={styles.splitbutton}>
                                <button onClick={e => toggleDropdown()}>Prestations aux professionnels</button>
                                <div id="menu" className={styles.menu}>
                                    <Link href = "/Prestations-pros/gestes-et-postures" >Gestes et postures</Link> 
                                </div>
                            </div>
                        </li>
                        <li><Link href = "">Prestations aux particuliers</Link></li>
                        <li><Link href = "#contact" onClick={e=>setactiveMenu(null)}>Contact</Link></li>
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
                    {lateralMenu}
                </section>
                <section className={styles.content}>
                    {props.content}
                </section>
            </main>
            <Footer />
        </>
    )
    
})
Layout.displayName = 'Layout';
export default Layout;
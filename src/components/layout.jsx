import Script from 'next/script'
import styles from "@/styles/layout.module.css";
import React, {useState,useEffect, useImperativeHandle, forwardRef} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import MenuPrestationPro from './menuPrestationPro';
import MenuPrestationParticulier from './menuPrestationParticulier';

 const Layout = ((props, {children}) => 
{
    const toggleDropdown = (e) => {
        const splitbutton = e.target.closest('#splitbutton'),
        menu = splitbutton.querySelector("#menu");
        menu.classList.toggle(styles.open);
        splitbutton.classList.toggle(styles.open);
      };
    let [activeMenu, setactiveMenu] = useState(null);
    const lateralMenu = props.menu == "pro" ? <MenuPrestationPro className = {styles.menuLateral} /> : (props.menu == "particulier" ? <MenuPrestationParticulier className = {styles.menuLateral} /> : "");
    useEffect(() => {
    }, [])
    return (
        <>
            <header className={styles.header}>
                <Image loading = 'lazy' src="/images/logo.png" width={140} height={70} className={styles.logo} alt='perform&zen logo de la marque'/>
                <nav className={[styles.nav, activeMenu].join(' ')}>
                    <ul>
                        <li><Link href = "/">Accueil</Link></li>
                        <li className={styles.prestationspro}>
                            <div id = "splitbutton" className={styles.splitbutton}>
                                <button onClick={e => toggleDropdown(e)}>Prestations aux professionnels</button>
                                <div id="menu" className={styles.menu}>
                                    <Link href = "/Prestations-pros/gestes-et-postures" >Gestes et postures</Link> 
                                    <Link href = "/Prestations-pros/gestion-du-stress" >Gestion du stress</Link> 
                                    <Link href="/Prestations-pros/mobiliser-sereinement-ses-ressources">Mobiliser sereinement ses ressources</Link>
                                    <Link href="/Prestations-pros/optimisation-des-performances">Optimisation des performances</Link>
                                </div>
                            </div>
                        </li>
                        <li className={styles.prestationspro}>
                            <div id = "splitbutton" className={styles.splitbutton}>
                                <button onClick={e => toggleDropdown(e)}>Prestations aux particuliers</button>
                                <div id="menu" className={styles.menu}>
                                    <Link href = "/Prestations-particuliers/amelioration-du-sommeil" >Amélioration du sommeil</Link> 
                                    <Link href = "/Prestations-particuliers/developper-ses-performances" >Développer ses performances</Link> 
                                    <Link href = "/Prestations-particuliers/gerer-son-stress" >Gérer son stress</Link> 
                                    <Link href = "/Prestations-particuliers/realiser-ses-objectifs" >Réalisation d&apos;objectifs</Link> 
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id = "splitbutton" className={styles.splitbutton}>
                                <button onClick={e => toggleDropdown(e)}>Contact</button>
                                <div id="menu" className={styles.menu} style={{transform:"translateX(-25%)"}}>
                                    <Link href = "mailto:performandzen@gmail.com">performandzen@gmail.com</Link>
                                    <Link href = "tel:0675563584">06.75.56.35.84</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className={styles.burger}>
                    <label htmlFor="unused" style={{position:"absolute", left:"9999999"}}></label>
                    <input id='unused' type="checkbox" onChange={e => setactiveMenu(activeMenu == null ? styles.active : null)}/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul></ul>
                </div>
            </header>
            <main className={styles.main } style={lateralMenu == "" ? {display:"block"} : {}}>
                { lateralMenu!= "" ? <section className={styles.lateral}>{lateralMenu} </section> : ""}
                    
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
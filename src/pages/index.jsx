import Head from 'next/head'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import img from 'next/image'
import Link from 'next/link';
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Content from '@/components/content'
import React, {useState,useEffect, useImperativeHandle, forwardRef} from 'react';

const inter = Inter({ subsets: ['latin'] })

function Home(pageProps) {
  function transformPanel(mouseEvent) {
    let myPanel = document.getElementById("panel");
    let subpanel = document.getElementById("panel-container");
    let mouseX, mouseY;
    let transformAmount = 5;
      mouseX = mouseEvent.pageX;
      mouseY = mouseEvent.pageY;

      const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
      const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

      const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
      const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));
      subpanel.style.animation = "unset";
      subpanel.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
  }

  function handleMouseEnter() {
    let subpanel = document.getElementById("panel-container");
      setTimeout(() => {
          subpanel.style.transition = "";
      }, 100);
      subpanel.style.transition = "transform 0.1s";
      subpanel.style.animation = "unset";
      subpanel.style.transform = "perspective(400px) rotateX(0deg) rotateY(0deg);";
  }

  function handleMouseLeave() {
    let subpanel = document.getElementById("panel-container");
      subpanel.style.transition = "transform 0.1s";
      setTimeout(() => {
          subpanel.style.transition = "";
      }, 100);

      subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
      subpanel.style.animation = `${styles.visitcard3D} 5s ease-in 1s infinite linear`;
  }
  /*Fin effet 3D parallax*/

  function toggleActiveMenu()
  {
      const navlist = document.querySelector('nav ul');
      navlist.classList.toggle(styles.active)
  }
  
  useEffect(() => {
    let myPanel = document.getElementById("panel");
    let subpanel = document.getElementById("panel-container");
    let mouseX, mouseY;
    let transformAmount = 5;
    myPanel.onmousemove = transformPanel;
    myPanel.onmouseenter = handleMouseEnter;
    myPanel.onmouseleave = handleMouseLeave;
    
    // if(window.innerWidth > 1300)
    // {
        const sliders = document.querySelectorAll(`.${styles.slideright},.${styles.slidetop}, .${styles.slidebottom}`);
        sliders.forEach(slider => {
            let className = slider.className;
            const parent = slider.closest('section');
            const parentClientRects = parent.getClientRects()[0]
            const coordYparent = parentClientRects.y;
            const heightParent = parentClientRects.height;
            const triggerPoint = coordYparent-(heightParent);
            // const triggerPoint = coordYparent+(heightParent/2);
            document.addEventListener('scroll', event => {
                if(window.scrollY >= triggerPoint && slider.classList.contains(styles.hidden))
                {
                slider.classList.remove(styles.hidden)
                }
            })
        })
    // }
  }, [])
  // console.log(pageProps)
  return (
    <main className={styles.main}>
      <Head>
        <title>Perform&Zen</title>
        <meta name="description" content="Coaching et consulting pour les particuliers et les entreprises. Méthode LEAN et Techniques d'optimisation du potentiel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.herobanner} >
        <header className={styles.header}>
            <img src={"/images/logo.png"} width={140} className={styles.logo} alt='perform&zen logo'/>
            <nav className={styles.nav}>
                <ul>
                    <li><a>Prestations aux professionnels</a></li>
                    <li><a>Prestations aux particuliers</a></li>
                    <li><a href = "#contact" onClick={e=>toggleActiveMenu()}>Contact</a></li>
                </ul>
            </nav>
            <div className={styles.burger}>
                <input type="checkbox" onChange={e=>toggleActiveMenu()}/>
                <span></span>
                <span></span>
                <span></span>
                <ul></ul>
            </div>
        </header>
        <div className={styles.filter}></div>
        <div className={styles.marque}>
            <h1>
                <span>&</span>
                <span>
                    <span>
                        Perform
                    </span>
                    <span>
                        Zen
                    </span>
                </span>
            </h1>
            <p>
                Une boîte à outils de méthodes physiques, psychiques et organisationnelles au service de la performance
            </p>
        </div>
        <div className={styles.mousewheel} >
            <span className={styles.flecheGoBottom}>

            </span>
        </div>
    </div>
    <main>
        {/* <section className={styles.presentation} >
            <div className={styles.slideright} >
                <h2 >Présentation</h2>
                <b >Je m&apos;appelle Christelle,</b>
                <p >
                    Femme avant tout et passionnée depuis toujours par les relations et le bien-être, je me suis parallèlement formée à différentes compétences en développement personnel pour compléter ma carrière.<br/>
                    <br/>
                    <br/>
                    Il me tient à cœur, aujourd&apos;hui, de mettre à profit, partager et transmettre mes connaissances et compétences dans l&apos;accompagnement de personnes comme d&apos;entreprises dans leur évolution  et dans l&apos;optimisation de leur potentiel. <br/>
                    <br/>
                    <br/>
                    Mon approche, de manière générale, consiste à m&apos;appuyer sur mon expérience acquise ainsi que sur les outils classiques de l&apos;accompagnement en optimisation du potentiel et de les associer à des méthodes originales et novatrices afin d&apos;obtenir de meilleures performances.
                </p>
            </div>
            <img src={"/images/photo site.jpeg"} alt="" />
        </section> */}
        <section className={styles.prestations}>
            <div className={[styles.slidetop, styles.hidden].join(' ')} >
                <h3>Professionnels</h3>
                <p>
                    L&apos;investissement dans le bien-être des employés peut améliorer leur santé physique et mentale, augmenter la productivité, réduire l&apos;absentéisme, améliorer la rétention des employés, renforcer l&apos;image de l&apos;entreprise et réduire les coûts liés à la santé. <br/>
                    <br/>
                    Tous ces avantages peuvent aider une entreprise à optimiser sa performance globale.
                </p>
                <a>
                    Prestations professionnels
                </a>
            </div>
            <div  className={[styles.slidebottom, styles.hidden].join(' ')}>
                <h3 >Particuliers</h3>
                <p>
                    Équilibrez votre vie, épanouissez vous au travail : Trouvez un équilibre entre votre vie personnelle et professionnelle pour être plus heureux et plus performant.<br/>
                    <br/>
                    Investissez dans vous-même, vous êtes votre meilleur atout : Développez vos compétences et prenez soin de votre bien-être pour améliorer votre carrière.
                </p>
                <a>
                    Prestations particuliers
                </a>
            </div>
        </section>
        <section id = "contact" className={styles.contact} >
            <div id="panel"  className={styles.panel} >
                <img id="panel-container" className={styles.panelContainer}  src={"/images/png_20220724_153350_0000.PNG"} alt=''/>
            </div>
            <div>
                <h2>Contact</h2>
                <b>Christelle CROIZÉ</b>
                <a href = "mailto:performandzen@gmail.com">performandzen@gmail.com</a>
                <a href = "tel:0675563584">06.75.56.35.84</a>
                <a className={styles.linkedin}><img src={"/images/logo-linkedin.png"} alt="" /></a>
            </div>
        </section>
    </main>
      {/* <Layout>
        <Content />
      </Layout> */}
      <Footer />
    </main>
  )
}
export default Home;

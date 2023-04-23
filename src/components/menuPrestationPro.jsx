import Link from 'next/link'
import Image from 'next/image'
import React, {useState,useEffect} from 'react'
import styles from '@/styles/menulateral.module.css'

function MenuPrestationPro(props)
{
    return(
        <div className={styles.menu}>
            <ul>
                <li><Link href="/Prestations-pros/gestes-et-postures">Gestes et Postures</Link></li>
                <li><Link href = "/Prestations-pros/gestion-du-stress" >Gestion du stress</Link> </li>
                <li><Link href="/Prestations-pros/mobiliser-sereinement-ses-ressources">Mobiliser sereinement ses ressources</Link></li>
                <li><Link href="/Prestations-pros/optimisation-des-performances">Optimisation des performances</Link></li>
            </ul>
        </div>
    )
}

export default MenuPrestationPro
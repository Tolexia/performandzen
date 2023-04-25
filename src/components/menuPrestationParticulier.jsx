import Link from 'next/link'
import Image from 'next/image'
import React, {useState,useEffect} from 'react'
import styles from '@/styles/menulateral.module.css'

function MenuPrestationParticulier(props)
{
    return(
        <div className={styles.menu}>
            <ul>
                <li><Link href = "/Prestations-particuliers/amelioration-du-sommeil" >Amélioration du sommeil</Link> </li>
                <li><Link href = "/Prestations-particuliers/developper-ses-performances" >Développer ses performances</Link> </li>
                <li><Link href = "/Prestations-particuliers/gerer-son-stress" >Gérer son stress</Link> </li>
                <li><Link href = "/Prestations-particuliers/realiser-ses-objectifs" >Réalisation d&apos;objectifs</Link> </li>
            </ul>
        </div>
    )
}

export default MenuPrestationParticulier
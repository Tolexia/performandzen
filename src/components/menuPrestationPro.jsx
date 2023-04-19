import Link from 'next/link'
import Image from 'next/image'
import React, {useState,useEffect} from 'react'
import styles from '@/styles/menulateral.module.css'

function MenuPrestationPro(props)
{
    return(
        <div className={styles.menu}>
            <ul>
                <li>Gestes et Postures</li>
                <li>Gestion du stress</li>
                <li>Mobiliser sereinement ses ressources</li>
                <li>Optimisation des performances</li>
            </ul>
        </div>
    )
}

export default MenuPrestationPro
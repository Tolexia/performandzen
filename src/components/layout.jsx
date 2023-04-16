import Script from 'next/script'
import styles from "@/styles/layout.module.css";
import React, {useState,useEffect, useImperativeHandle, forwardRef} from 'react';
import Image from 'next/image'
import Link from 'next/link'

 const Layout = forwardRef(({children}, ref) => 
{
    let [active, setactive] = useState(styles.noactive);
    let [activeMenu, setactiveMenu] = useState(null);
   
    useEffect(() => {
    }, [])
    return (
        <>
            {children}
        </>
    )
    
})
Layout.displayName = 'Layout';
export default Layout;
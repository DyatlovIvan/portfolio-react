import style from './Nav.module.scss'
import React from "react";

export const Nav = () =>{
    return(
        <div className={style.nav}>

            <a href="" className={style.navText}>Main</a>
            <a href="" className={style.navText}>Skills</a>
            <a href="" className={style.navText}>Projects</a>
            <a href="" className={style.navText}>Contacts</a>
        </div>

    )
}
import React from "react";
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import avatarImage from '../assets/image/photo.jpg'

export const Main = () => {
    const avatar = {
        backgroundImage:`url(${avatarImage})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span className={`${style.discription} ${style.primaryText}`}>HELLO! I AM</span>
                    <h1 className={style.textName}>DYATLOV IVAN</h1>
                    <p className={style.discription}>Frontend Developer.</p>
                </div>
                <div className={style.photo} style={avatar}>

                </div>
            </div>

        </div>

    )
}
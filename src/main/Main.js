import React from "react";
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import avatarImage from '../assets/image/photo.jpg'
import Particles from "react-tsparticles";

export const Main = () => {
    const avatar = {
        backgroundImage: `url(${avatarImage})`
    }
    const particlesOpt = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            }
        }
    }
    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
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
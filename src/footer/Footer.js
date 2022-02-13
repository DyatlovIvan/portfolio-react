import {FooterItem} from "./footerItem/FooterItem";
import style from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import telegramImg from '../assets/image/telegram.png'
import linkedInImg from '../assets/image/linkedIn.png'
import githubImg from '../assets/image/github.png'
import codeWarsImg from '../assets/image/codewars.png'
import Fade from 'react-reveal/Fade';

export const Footer = () =>{
    const telegram = {
        backgroundImage: `url(${telegramImg})`,
        url: 'https://streamdetails.com/'

    }
     const linkedIn = {
        backgroundImage: `url(${linkedInImg})`,
         url: 'https://streamdetails.com/'

    }
     const github = {
        backgroundImage: `url(${githubImg})`,
         url: 'https://github.com/DyatlovIvan'

    }
     const codeWars = {
        backgroundImage: `url(${codeWarsImg})`,
         url: 'https://streamdetails.com/'

    }

    return(
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Fade right>
                <h2 className={style.title}>Dyatlov Ivan</h2>
                </Fade>
                <Fade left>
                <div className={style.footerItems}>
                    <FooterItem style = {telegram}/>
                    <FooterItem style = {linkedIn}/>
                    <FooterItem style = {github}/>
                    <FooterItem style = {codeWars}/>
                </div>
                </Fade>
                <span className={style.comment}>© 2021 All rights reserved</span>
            </div>
        </div>
    )
}
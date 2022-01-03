import {FooterItem} from "./footerItem/FooterItem";
import style from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () =>{
    return(
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Dyatlov Ivan</h2>
                <div className={style.footerItems}>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                </div>
                <span className={style.comment}>© 2021 All rights reserved</span>
            </div>
        </div>
    )
}
import {FooterItem} from "./footerItem/FooterItem";
import style from './Footer.module.css'
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
                <span>© 2021 Все права защищены</span>
            </div>
        </div>
    )
}
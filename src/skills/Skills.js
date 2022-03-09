import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import JSLogo from '../assets/image/javascript.svg'
import CSSLogo from '../assets/image/CSS3.svg'
import HTMLLogo from '../assets/image/html.svg'
import ReactLogo from '../assets/image/react.svg'
import ReduxLogo from '../assets/image/redux.svg'
import TSLogo from '../assets/image/Typescript.svg'
import Fade from 'react-reveal/Fade';


export const Skills = () => {
    const JSImg = {
        backgroundImage: `url(${JSLogo})`,
    }
    const CSSImg = {
        backgroundImage: `url(${CSSLogo})`,
    }
    const HTMLImg = {
        backgroundImage: `url(${HTMLLogo})`,
    }
    const ReactImg = {
        backgroundImage: `url(${ReactLogo})`,
    }
    const ReduxImg = {
        backgroundImage: `url(${ReduxLogo})`,
    }
    const TSImg = {
        backgroundImage: `url(${TSLogo})`,
    }
    return (
        <div  id = 'skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <Fade bottom>
                    <div className={style.skills}>
                        <Skill title={'React'} logo={ReactImg}/>
                        <Skill title={'Redux'} logo={ReduxImg}/>
                        <Skill title={'TS'} logo={TSImg}/>
                        <Skill title={'JS'} logo={JSImg}/>
                        <Skill title={'HTML'} logo={HTMLImg}/>
                        <Skill title={'CSS'} logo={CSSImg}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
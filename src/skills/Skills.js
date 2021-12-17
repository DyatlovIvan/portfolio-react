import  style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export  const Skills = ()=>{
    return(
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title = {'JS'} description = {'blabla blab lablablab lablab  lablab labla bla bla blab la'}/>
                    <Skill title = {'Css'} description = {'bl abl ab labl ablab lab lab la bla blabl abla'}/>
                    <Skill title = {'React'} description = {'blablablabla blablab labla blabl abla bla'}/>
                    <Skill title = {'Redux'} description = {'fd dfdf fd fd dfd df df dfdfdfd blablablabla blablab labla blabl abla bla'}/>
                </div>
            </div>
        </div>
    )
}
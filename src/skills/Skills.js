import  styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export  const Skills = ()=>{
    return(
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title = {'JS'} description = {'blabla blab lablablab lablab  lablab labla bla bla blab la'}/>
                    <Skill title = {'Css'} description = {'bl abl ab labl ablab lab lab la bla blabl abla'}/>
                    <Skill title = {'React'} description = {'blablablabla blablab labla blabl abla bla'}/>
                </div>
            </div>
        </div>
    )
}
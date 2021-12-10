import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import socialNetworkImage from '../assets/image/socialNetwork.jpg'
import todolistImage from '../assets/image/todolistImage.jpg'

export const Projects =()=>{
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todolistImage})`,
    }
    return(
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
               <Title title ={'Projects'}/>
                <div className={style.projects}>
                    <Project style = {todolist} projectTitle = 'todo list' description = 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'/>
                    <Project style = {socialNetwork} projectTitle = 'social network' description = 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'/>
                </div>
            </div>
        </div>
    )
}
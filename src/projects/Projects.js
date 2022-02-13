import style from './Projects.module.scss'
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
        <div id = 'projects' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
               <Title title ={'Projects'}/>
                <div className={style.projects}>
                    <Project style = {todolist} projectTitle = 'todo list' description = 'A web service for managing tasks. Tasks can be placed into projects, sorted by filter, assigned labels, edited.'/>
                    <Project style = {socialNetwork} projectTitle = 'social network' description = 'An online platform that is used for communication, dating, creating social relationships between people.'/>
                </div>
            </div>
        </div>
    )
}
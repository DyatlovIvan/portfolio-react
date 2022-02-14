import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import socialNetworkImage from '../assets/image/socialnetwork.png'
import todolistImage from '../assets/image/todolist.jpg'
import Fade from 'react-reveal/Fade';


export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todolistImage})`,
    }
    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Projects'}/>
                <Fade bottom>
                    <div className={style.projects}>
                        <Project style={todolist} projectTitle='todo list'
                                 url = {'https://dyatlovivan.github.io/todoList/#/login'}
                                 description='A web service for managing tasks. Tasks can be placed into projects, sorted by filter, assigned labels, edited.'/>
                        <Project style={socialNetwork} projectTitle='social network'
                                 url = {'https://dyatlovivan.github.io/socialnetwork/#/login'}
                                 description='An online platform that is used for communication, dating, creating social relationships between people.'/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
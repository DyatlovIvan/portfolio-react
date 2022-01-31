import style from './skill.module.scss'

export const Skill = (props) =>{
    return(
        <div className={style.skill}>
            <div className={style.icon} style={props.logo}></div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}
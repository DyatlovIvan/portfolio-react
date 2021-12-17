import style from './Project.module.scss'
import React from "react";

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                <a href={''} className={style.viewBtn}>View</a>
            </div>

            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.projectTitle}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    )
}
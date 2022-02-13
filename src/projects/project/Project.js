import style from './Project.module.scss'
import React from "react";
import Tilt from "react-tilt/dist/tilt";

export const Project = (props) => {
    return (
        <Tilt option={{max: 25}}>
            <div className={style.project}>
                <div className={style.imgContainer} style={props.style}>
                    <a target={'_blank'} href={props.url} className={style.viewBtn}>View</a>
                </div>

                <div className={style.projectInfo}>
                    <h3 className={style.projectTitle}>{props.projectTitle}</h3>
                    <span className={style.description}>{props.description}</span>
                </div>
            </div>
        </Tilt>
    )
}
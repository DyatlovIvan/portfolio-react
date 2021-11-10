import style from './Project.module.css'
import React from "react";

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                    <a>Посмотреть</a>
            </div>


                <div className={style.title}>{props.title}</div>
                <span className={style.description}>{props.description}</span>

        </div>
    )
}
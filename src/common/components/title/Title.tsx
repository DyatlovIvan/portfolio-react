import style from "./Title.module.scss";

type TitleType = {
    title:string
}
export const Title = ({title,...props}:TitleType) =>{

    return(
        <div className={style.title}>
            <h2>{title}</h2>
        </div>
    )
}
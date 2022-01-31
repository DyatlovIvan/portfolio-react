import style from './Button.module.scss'
export const Button = (props) => {
    return(
        <a href ='' className={style.bnt}>{props.text}</a>
    )
}
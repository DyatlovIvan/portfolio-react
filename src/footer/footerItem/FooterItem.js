import style from './FooterItem.module.scss'
export const FooterItem = (props)=>{
    return(
        <a
            href={props.style.url}
            target="_blank"
            style = {props.style}
            className={style.item}>

        </a>
    )
}
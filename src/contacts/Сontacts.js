import styleContainer from "../common/styles/Container.module.css";
import style from './Сontacts.module.scss'


export const Contacts = () =>{
    return(
        <div className={style.contactsBlock}>
            <div className= {`${styleContainer.container} ${style.contactsContainer}`}>
                <div>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contactBox}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea cols="30" rows="10"></textarea>
                    <button type="submit">Отправить</button>
                </form>
                </div>
            </div>
        </div>
    )
}
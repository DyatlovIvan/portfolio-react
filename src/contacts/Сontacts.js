import styleContainer from "../common/styles/Container.module.css";
import style from './Сontacts.module.css'


export const Contacts = () =>{
    return(
        <div className={style.contactsBlock}>
            <div className= {`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contactBox}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea cols="30" rows="10"></textarea>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    )
}
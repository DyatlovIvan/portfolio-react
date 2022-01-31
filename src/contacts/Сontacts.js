import styleContainer from "../common/styles/Container.module.css";
import style from './Сontacts.module.scss'
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title title={'Сontacts'}/>
                <form className={style.form}>
                    <div>
                        <input type={'text'} className={style.formArea} placeholder={'name'}/>
                    </div>
                    <div>
                        <input type={'text'} className={style.formArea} placeholder={'e-mail'}/>
                    </div>


                    <textarea className={style.messageArea} placeholder={'message'}/>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    )
}
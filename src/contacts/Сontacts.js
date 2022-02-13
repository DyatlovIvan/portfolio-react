import style from './Сontacts.module.scss'
import {Title} from "../common/components/title/Title";
import axios from "axios";
import {useFormik} from "formik";
import Fade from 'react-reveal/Fade';


export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
            axios.post('https://smpt-nodejs-server1.herokuapp.com/sendMessage',{
                name: values.name,
                email: values.email,
                message: values.message
            })
            alert('Ok!')
        }
    })

    const OnChangeHandler = (e) => {
        formik.handleChange(e)
    }

    return (
        <div id = 'contacts' className={style.contactsBlock}>
            <div className={style.container}>
                <Title title={'Сontacts'}/>
                <Fade left>
                <form onSubmit={formik.handleSubmit} className={style.form}>
                    <div>
                        <input id={'name'}
                               name={'name'}
                               type={'text'}
                               onChange={OnChangeHandler}
                               value={formik.values.name}
                               className={style.formArea}
                               placeholder={'name'}
                        />
                    </div>
                    <div>
                        <input id={'email'}
                               name={'email'}
                               type={'text'}
                               onChange={OnChangeHandler}
                               value={formik.values.email}
                               className={style.formArea}
                               placeholder={'e-mail'}
                        />
                    </div>

                    <textarea  id = {'message'}
                               name={'message'}
                               onChange={OnChangeHandler}
                               value={formik.values.message}
                               className={style.messageArea}
                               placeholder={'message'} />
                    <button type="submit">Send message</button>
                </form>
                </Fade>
            </div>
        </div>
    )
}
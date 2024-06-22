import { Field, Form, Formik } from "formik"
import { useId } from "react";
import css from "./ContactsForm.module.css"
import { useDispatch } from "react-redux";
import {addContact} from "../../redux/contactsOps"
import * as Yup from "yup";


const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
     .min(3, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   number: Yup.string()
     .min(3, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
});
const initialValues = {
    name: "",
   number: "",
    
}
const ContactsForm = () => {
    const dispatch = useDispatch();
     const nameId = useId();
    const numberId = useId();
    const handleSubmit = (values, actions) => {
     dispatch(addContact({name:values.name, number:values.number})) 
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.form}>
                <div className={css.formBox}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} className={css.inputForm }></Field>
                </div>
                 <div className={css.formBox}>
                    <label htmlFor={numberId}>Number</label>
                    <Field type="text" name="number" id={numberId} className={css.inputForm }></Field>
                </div>
                <button type="submit" className={css.btn}>Add contact</button>
            </Form>
        </Formik>
    )
}
export default ContactsForm
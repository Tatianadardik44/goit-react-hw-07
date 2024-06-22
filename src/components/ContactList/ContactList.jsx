import { useSelector } from "react-redux"

import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { selectContacts } from "../../redux/contactsSlice"
import { selectNameFilter } from "../../redux/filterSlice"



const ContactList = () => {
    const contacts = useSelector(selectContacts)
    const filterName = useSelector(selectNameFilter)
console.log(contacts);
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));
    return (
        <ul className={css.listUser}>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <Contact contact={contact } />  
               </li> 
            ))}
        </ul>
            )
}
export default ContactList
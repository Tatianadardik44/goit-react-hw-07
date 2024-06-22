import { useDispatch, useSelector } from 'react-redux'
import ContactList from '../ContactList/ContactList'
import ContactsForm from '../ContactsForm/ContactsForm'
import SearchBox from '../SearchBox/SearchBox'
import css from './App.module.css'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contactsOps'
import { selectError, selectLoading } from '../../redux/contactsSlice'

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
   dispatch(fetchContacts())
  }, [dispatch])

  return (
      <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error }
      <ContactList />
    </div>
  )
}

export default App

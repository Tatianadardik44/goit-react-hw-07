import { useDispatch } from "react-redux"
import css from "./SearchBox.module.css"
import { changeFilter } from "../../redux/filterSlice"

const SearchBox = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
      dispatch(changeFilter(event.target.value))
    }
    return (
        <div className={css.searchBox}>
            <p><b>Find contacts by name</b></p>
            <input type="text"  onChange={handleChange} className={css.inputSearch }></input>
        </div>
    )
}
export default SearchBox
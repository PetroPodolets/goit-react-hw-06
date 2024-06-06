import { useId } from "react"
import css from './SearchBox.module.css'
import { useDispatch } from "react-redux";

import { setSearchQuery } from '../../redux/filtersSlice'

export default function SearchBox() {
    const dispatch = useDispatch();

    const handleSearchChange = (event) => {
        dispatch(setSearchQuery(event.target.value));
    };
    const searchId = useId();
    return (

        <div className={css.container}>
            <label htmlFor={searchId}>Find contacts by name</label>
            <input className={css.searchInput} onChange={handleSearchChange} type="text" name="" /*id={searchId}*/ />
        </div>
    )
}
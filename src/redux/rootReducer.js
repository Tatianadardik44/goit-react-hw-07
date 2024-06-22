import { contactReducer } from "./contactsSlice";
import { filtersReducer } from "./filterSlice";





 export const rootReducer = {
   contacts: contactReducer,
   filters: filtersReducer

}
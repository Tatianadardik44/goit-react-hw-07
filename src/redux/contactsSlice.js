import { createSelector, createSlice } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filterSlice";



const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase (addContact.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
            })
            .addCase(addContact.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase ( deleteContact.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                 state.loading = false;
                const index = state.items.findIndex(item => item.id === action.payload.id)
                state.items.splice(index, 1)
               
            })
            .addCase( deleteContact.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
  })

export const selectError = (state) => state.contacts.error
export const selectLoading = (state) => state.contacts.loading
export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filterName) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));
})
export const contactReducer = contactsSlice.reducer
   
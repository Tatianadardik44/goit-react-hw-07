import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from "./contactsOps";



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
            .addCase( deleteContact.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id)
                state.items.splice(index, 1)
                state.loading = false;
            })
            .addCase( deleteContact.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
})
export const selectError = (state) => state.contacts.error
export const selectLoading = (state) => state.contacts.loading
export const selectContacts = (state) => state.contacts.items;

export const contactReducer = contactsSlice.reducer
    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //             state.items.push(action.payload);
    //         },
    //         prepare(name, number) {
    //             return {
    //                 payload: {
    //                     name,
    //                     id: nanoid(),
    //                     number
    //                 },
    //             };
    //         },
    //     },
    //     deleteContact(state, action) {
    //         const index = state.items.findIndex(contact => contact.id === action.payload);
    //         state.items.splice(index, 1);
    //     }
    // }
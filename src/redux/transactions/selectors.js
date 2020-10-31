// import {createSelector} from '@reduxjs/toolkit';

// const getAllContacts = state => state.contacts.items;
// const getFilter = state => state.contacts.filter;

// const getContact = (state, ownProps) => {
//   const contacts = getAllContacts(state);
//   const item = contacts.find(item => item.id === ownProps.id);
//   return {
//     contact: item.name,
//     number: item.number,
//   };
// };

// const getVisibleContacts = createSelector(
//   [getAllContacts, getFilter],
//   (items, filter) =>
//     items.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())),
// );

// export default {
//   getAllContacts,
//   getContact,
//   getFilter,
//   getVisibleContacts,
// };
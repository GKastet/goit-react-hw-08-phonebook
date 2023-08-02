//import withAuthRedirect from 'HOC/withAuthRedirect';
import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { Section } from 'components/SectionStyled';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/Slices/contactsSlice';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactThunk,
} from 'redux/Thunks/contactsThunk';
import {
  selectContacts,
  selectError,
  selectFiltered,
  selectIsLoading,
} from 'redux/selectors';

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filtered = useSelector(selectFiltered);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);

  const formAddContact = contactData => {
    const finded = contacts.find(contact => contact.name === contactData.name);
    if (finded) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }
    dispatch(addContactThunk(contactData));
  };

  const handleOnChangeFilter = evt => {
    dispatch(filterContact(evt.currentTarget.value));
  };

  const filteredContact = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm formAddContact={formAddContact} contactsArr={contacts} />
      <h2>Contacts</h2>
      <Filter value={filtered} handleOnChangeFilter={handleOnChangeFilter} />
      {isLoading && <Loader />}
      {error && <>Oops... Error: {error}</>}
      <Contacts
        filteredContact={filteredContact}
        onRemoveContact={contactId => {
          dispatch(deleteContactThunk(contactId));
        }}
        value={filtered}
        handleOnChangeFilter={handleOnChangeFilter}
      />
    </Section>
  );
};

//export default withAuthRedirect(ContactsPage);
export default ContactsPage;

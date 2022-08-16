import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container } from './App.styled';

export function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ??
      [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  });
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])


  const addContact = ({ name, number }) => {
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    };

    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    setContacts(prevContacts => [contact, ...contacts])
  };

  const deleteContact = (id) => {
    setContacts(prevContacts => contacts.filter(contact => contact.id !== id))
  };
  
  const searchFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }


    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={searchFilter}
        />
        <ContactList
          contacts={getVisibleContact()}
          onDeleteContact={deleteContact}
        />
      </Container>
    )
};
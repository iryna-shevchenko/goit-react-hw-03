import { useState, useEffect } from "react";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import EmptyContactsList from "../EmptyContactsList/EmptyContactsList";

import css from "./App.module.css";

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const getSavedContacts = () => {
  const savedContacts = window.localStorage.getItem("phonebook-contacts");
  return savedContacts !== null ? JSON.parse(savedContacts) : defaultContacts;
};

export default function App() {
  const [contacts, setContacts] = useState(getSavedContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("phonebook-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const searchField = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <div className={css.container}>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} contacts={searchField} />
      {searchField.length > 0 ? (
        <ContactList contacts={searchField} onDelete={deleteContact} />
      ) : (
        <EmptyContactsList />
      )}
    </div>
  );
}

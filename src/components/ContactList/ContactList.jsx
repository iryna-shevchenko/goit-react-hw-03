import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  const reversedContacts = contacts.slice().reverse();

  return (
    <ul className={css.list}>
      {reversedContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

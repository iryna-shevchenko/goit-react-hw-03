import { GoSearch } from "react-icons/go";

import css from "./SearchBox.module.css";
import ContactCount from "../ContactCount/ContactCount";

export default function SearchBox({ value, onFilter, contacts }) {
  return (
    <div className={css.box}>
      <span className={css.icon}>
        <GoSearch />
      </span>
      <input
        className={css.field}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="Search for contact by last name or phone number"
      />
      <div className={css.contactCount}>
        <ContactCount count={contacts.length} />
      </div>
    </div>
  );
}

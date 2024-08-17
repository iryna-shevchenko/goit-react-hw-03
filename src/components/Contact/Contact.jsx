import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.contactBox}>
      <div className={css.info}>
        <p className={css.contact}>
          <IoMdContact className={css.iconContact} />
          {name}
        </p>
        <p className={css.phone}>
          <FaPhoneAlt className={css.iconPhone} />
          {number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        <RiDeleteBin6Fill className={css.iconBtn} />
      </button>
    </div>
  );
}

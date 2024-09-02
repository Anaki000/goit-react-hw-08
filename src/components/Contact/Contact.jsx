import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaPhone, FaUser } from "react-icons/fa";
import s from "./Contacts.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={s.wrapper}>
      <div className={s.contactContainer}>
        <span className={s.contactSpan}>
          <FaUser />
          <p>{contact.name}</p>
        </span>
        <span className={s.contactSpan}>
          <FaPhone />
          <p>{contact.number}</p>
        </span>
      </div>
      <button onClick={handleDelete} className={s.contactBtn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

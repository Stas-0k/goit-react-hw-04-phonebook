import propTypes from 'prop-types';
import css from './contact-list.module.css';

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length > 0) {
    return (
      <ul className={css.list_contact}>
        {contacts.map(contact => (
          <li className={css.listItem_contact} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.bttn_contactList}
              type="button"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>No data to display :(</p>;
  }
};

ContactList.propTypes = {
  contacts: propTypes.shape(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDelete: propTypes.func.isRequired,
};

export default ContactList;

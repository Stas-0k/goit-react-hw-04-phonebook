import propTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import css from './contact-form.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = { onSubmit: propTypes.func.isRequired };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    };

    this.props.onSubmit(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.form_contact}>
        <label className={css.label_contact}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          className={css.input_contact}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />
        <label className={css.label_contact}>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          className={css.input_contact}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        />
        <button type="submit" className={css.bttn_contact}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

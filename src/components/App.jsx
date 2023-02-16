import React, { Component } from 'react';
import ContactForm from './contact-form';
import Filter from './filter';
import ContactList from './contact-list';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (
      this.state.contacts.find(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  contactDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() { 
    const savedContacts = localStorage.getItem("contacts")
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts)
      this.setState({ contacts: parsedContacts })
    } else { 
      this.setState({contacts:this.state.contacts})
    }
  }


  componentDidUpdate(_, prevState) { 
    if (prevState.contacts !== this.state.contacts) { 
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getContacts()}
          onDelete={this.contactDelete}
        />
      </div>
    );
  }
}

export default App;

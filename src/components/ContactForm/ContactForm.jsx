import { useState } from "react";
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from "redux/contactSlice";
import { Form, Label, Input, Button } from './ContactForm.styled';

export default function ContactForm() {
    const contactItems = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const nameItem = contactItems.map(value => value.name.toLowerCase());

        if (nameItem.includes(name.toLowerCase())) {
            alert(`${name} is already in contacts`);
        } else {
            dispatch(addContact({ name, number, id: nanoid() }));
            reset();
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

        return (
            <Form onSubmit={handleSubmit}>
                <Label> Name
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label> Number
                    <Input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        );
};
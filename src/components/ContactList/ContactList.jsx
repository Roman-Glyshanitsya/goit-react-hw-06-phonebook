import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

const ContactList = () => {
    const dispatch = useDispatch();
    const contactItems = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);

    const filterContact = () => {
        return contactItems.filter(contactItem => {
            return contactItem.name.toLowerCase().includes(filter.toLowerCase());
        });
    };

    return (
        <List>
            {filterContact().map(({ id, name, number }) =>
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onClick={() => dispatch(deleteContact(id))}
                />
            )}
        </List>
    );
};

export default ContactList;
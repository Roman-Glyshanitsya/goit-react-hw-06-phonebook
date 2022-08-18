import PropTypes from 'prop-types';
import { Item, Button, Span } from './ContactItem.styled';
import { deleteContact } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';

const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <Item>
            <p  >{name} : <Span>{number}</Span></p>
            <Button type='button' onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </Item>)
};

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
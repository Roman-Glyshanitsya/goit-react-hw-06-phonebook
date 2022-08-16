import PropTypes from 'prop-types';
import { Item, Button, Span } from './ContactItem.styled';

const ContactItem = ({ name, number, onClick}) => {
    return (
        <Item>
            <p  >{name} : <Span>{number}</Span></p>
            <Button type='button' onClick={onClick}>Delete</Button>
        </Item>)
};

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
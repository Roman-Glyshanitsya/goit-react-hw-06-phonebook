import { Label, Input } from './Filter.styled'
import { filterContact } from 'redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    return (
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filter}
                onChange={e => dispatch(filterContact(e.target.value))}
            />
        </Label>
    );
};

export default Filter;
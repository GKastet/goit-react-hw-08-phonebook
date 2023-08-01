import PropTypes from 'prop-types';
import { ContactDivStyled } from './ContactItemStyled'


const ContactItem = ({id, name, number, onRemoveContact})=>{
    return(
        <ContactDivStyled key={id}>
            <p>
              {name}: {number}
            </p>
            <button type='button' onClick={()=>onRemoveContact(id)}>Delete</button>
          </ContactDivStyled>
    )
}

ContactItem.propTypes={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onRemoveContact: PropTypes.func.isRequired
}

export default ContactItem
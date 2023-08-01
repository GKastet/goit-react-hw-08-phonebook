import PropTypes from 'prop-types';
import { InputStyled } from './FilterStyled';

const Filter = ({ value, handleOnChangeFilter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <InputStyled
       type="text"
       value={value}
       onChange={handleOnChangeFilter} />
    </>
  );
};

Filter.propTypes = {  
  handleOnChangeFilter: PropTypes.func.isRequired,
};

export default Filter;

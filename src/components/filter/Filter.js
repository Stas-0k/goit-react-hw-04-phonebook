import propTypes from 'prop-types';
import css from './filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <h3 className={css.head_filter}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={value}
        className={css.input_filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;

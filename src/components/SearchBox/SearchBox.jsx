import { useId } from 'react';
import css from './SearchBox.module.css';

export const SearchBox = ({ inputValue, onFilter }) => {
  const searchId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        id={searchId}
        value={inputValue}
        onChange={evt => onFilter(evt.target.value)}
      />
    </div>
  );
};

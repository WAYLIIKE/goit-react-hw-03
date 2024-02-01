import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ items, onDelete }) => {
  return (
    <div className={css.container}>
      {items.map(item => (
        <Contact data={item} key={item.id} onDelete={onDelete} />
      ))}
    </div>
  );
};

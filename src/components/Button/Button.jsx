import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

const Button = ({ text, icon, handleClick, type }) => {

    return (
        <button 
        className={type === 'create' ? 'btn' : 'btn newHabitBtn'}
        onClick={ handleClick }
        >
            <FontAwesomeIcon icon={icon} />
            <span>{ text }</span>
        </button>
    )
}

export default Button;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

const Button = ({ text, icon, handleClick }) => {

    return (
        <button 
        className='btn'
        onClick={ handleClick }
        >
            <FontAwesomeIcon icon={icon} />
            { text }
        </button>
    )
}

export default Button;
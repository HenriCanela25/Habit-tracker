import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CancelButton.css';

const CancelButton = ({ text, icon, handleClick }) => {

    return (
        <button
        type='button'
        className='cancel-btn'
        onClick={ handleClick }
        >
            <FontAwesomeIcon icon={icon} />
            { text }
        </button>
    )
}

export default CancelButton;
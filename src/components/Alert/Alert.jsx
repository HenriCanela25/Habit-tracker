import { faCheckCircle, faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Alert.css';

const Alert = ({ showAlert, setShowAlert, alertType, alertMessage }) => {

    return (
        <div className='alert'>
            <div className="alert-header">
                <div className='alert-header-title'>
                    <FontAwesomeIcon 
                    icon={ alertType === 'success' ? faCheckCircle : faCircleExclamation } 
                    className='alert-icon' 
                    style={{color: alertType === 'success' ? "#3bbb4c" : '#bb3b3b'}} 
                    />
                    <span>{ alertType === 'success' ? 'Habit created' : `Couldn't create habit` }</span>
                </div>
                <button onClick={() => setShowAlert(!showAlert)}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
            <span className='alert-description'>{ alertMessage }</span>
        </div>
    )
}

export default Alert;
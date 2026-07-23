import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './DayOfMonth.css';

const DayOfMonth = ({ dayOfMonth, setDayOfMonth }) => {

    return (
        <div className="monthly">
            <label>REPEAT EVERY</label>
            <div className="monthly-controller">
                <button type='button' onClick={() => setDayOfMonth(Math.max(1, dayOfMonth-1))}><FontAwesomeIcon icon={faMinus} /></button>
                <span>{ dayOfMonth }</span>
                <button type='button' onClick={() => setDayOfMonth(Math.min(31, dayOfMonth+1))}><FontAwesomeIcon icon={faPlus} /></button>
                <span className='monthTitle'>day of the month</span>
            </div>
        </div>        
    );
}

export default DayOfMonth;
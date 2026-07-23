import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './IntervalSelect.css';

const IntervalSelect = ({ interval, setInterval }) => {

    return (
        <div className="interval">
            <label>REPEAT EVERY</label>
            <div className="interval-controller">
                <button type='button' onClick={() => setInterval(Math.max(2, interval-1))}><FontAwesomeIcon icon={faMinus} /></button>
                <span>{ interval }</span>
                <button type='button' onClick={() => setInterval(interval+1)}><FontAwesomeIcon icon={faPlus} /></button>
                <span className='daysTitle'>days</span>
            </div>
        </div>        
    );
}

export default IntervalSelect;
import './DaysOfWeek.css';

const DaysOfWeek = ({daysOfWeek, setDaysOfWeek}) => {

    const daysSelected = daysOfWeek.filter(day => day.selected).map(day => day.id);

    const toggleDays = (id) => {
        setDaysOfWeek(daysOfWeek.map(day => {
            if (day.id === id) {
                return { ...day, selected: !day.selected };
            }
            
            return { ...day };
        }));
    }

    return (
        <div className="days">
            <label>WHICH DAYS</label>
            <div className="days-buttons">
                {daysOfWeek.map((day) => {
                    return (
                        <button
                        key={day.id}
                        type='button'
                        className={`dayButton ${day.selected ? 'day-selected' : ''}`}
                        onClick={() => toggleDays(day.id)}
                        >
                            {day.name}
                        </button>
                    )
                })}
            </div>
            {daysSelected.length === 0 && <span className='errorMessage'>You should select at least one day!</span>}
        </div>
    )
}

export default DaysOfWeek;
import './Frequency.css';

const Frequency = ({frequency, onChange}) => {

    const frequencies = [
        {id: "daily", name: "Daily"},
        {id: "weekly", name: "Weekly"},
        {id: "interval", name: "Every X days"},
        {id: "monthly", name: "Monthly"},
    ];

    return (
        <div className="frequency">
            <label>FREQUENCY</label>
            <div className="frequency-buttons">
                {frequencies.map((item) => {
                    return (
                        <button
                        key={item.id}
                        type='button'
                        className={`frequencyBtn ${frequency === item.id ? 'freq-selected' : ''}`}
                        onClick={() => onChange(item.id)}
                        >
                            {item.name}
                        </button>
                    )
                })}
            </div>
        </div>
    );
}

export default Frequency;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import "./HabitCard.css";


const HabitCard = ({ item }) => {

    return (
        <div className="card">
            <div className="cardHeader">
                <div className="cardColor" style={{backgroundColor: item.color}}></div>
                <div className={`cardStreak ${item.id === 1 ? 'streakActive' : ''}`}>
                    <FontAwesomeIcon icon={faFire} />
                    <span>0</span>
                </div>
            </div>
            <h1>{item.title}</h1>
            <p>{item.frequency}</p>
        </div>
    )
}

export default HabitCard;
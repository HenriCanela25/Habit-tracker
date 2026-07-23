import { useContext, useState } from 'react';
import HabitCard from './HabitCard';
import Button from '../Button/Button';
import AddHabit from './AddHabit';
import Alert from '../Alert/Alert';
import { HabitContext } from '../../context/HabitContext';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Habits.css';

const Habits = () => {

    const { habits } = useContext(HabitContext);

    const [modal, setModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const generateAlert = (type, message) => {

        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 3500);
        
    }

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            <div className="main">
                <div className="habitHeader">
                    <h1>All habits</h1>
                    <Button text={"New habit"} icon={faPlus} handleClick={toggleModal} />
                </div>
                <div className="habits">
                    {habits.map(habit => <HabitCard key={habit.id} item={habit} />)}
                </div>
                {modal && <AddHabit closeModal={toggleModal} generateAlert={generateAlert} />}
                <div className="alert-section">
                    { showAlert && <Alert showAlert={showAlert} setShowAlert={setShowAlert} alertType={alertType} alertMessage={alertMessage} /> }
                </div>
            </div>
        </>
    )
}

export default Habits;
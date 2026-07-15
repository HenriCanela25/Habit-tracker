import { useState } from 'react';
import HabitCard from './HabitCard';
import Button from '../Button/Button';
import AddHabit from './AddHabit';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Habits.css';

const Habits = () => {

    const [habits] = useState([
        {id: 1, 
         title: "Do exercise", 
         description: "Every morning from Monday to Saturday",
         frequency: "Specific days",
         frequencyConfig: {
            interval: 0,
            daysOfWeek: [1, 2, 3, 4, 5, 6],
            dayOfMonth: 0
         },
         habitStatus: "active",
         addDate: "13/07/2026",
         modifyDate: "13/07/2026"
        },
        {id: 2, 
         title: "Learn React", 
         description: "Every day if I can",
         frequency: "Daily",
         frequencyConfig: {
            interval: 0,
            daysOfWeek: [],
            dayOfMonth: 0
         },
         habitStatus: "active",
         addDate: "13/07/2026",
         modifyDate: "13/07/2026"
        },
        {id: 3, 
         title: "Learn React", 
         description: "Every day if I can",
         frequency: "Daily",
         frequencyConfig: {
            interval: 0,
            daysOfWeek: [],
            dayOfMonth: 0
         },
         habitStatus: "active",
         addDate: "13/07/2026",
         modifyDate: "13/07/2026"
        },
        {id: 4, 
         title: "Learn React", 
         description: "Every day if I can",
         frequency: "Daily",
         frequencyConfig: {
            interval: 0,
            daysOfWeek: [],
            dayOfMonth: 0
         },
         habitStatus: "active",
         addDate: "13/07/2026",
         modifyDate: "13/07/2026"
        },
        {id: 5, 
         title: "Learn React", 
         description: "Every day if I can",
         frequency: "Daily",
         frequencyConfig: {
            interval: 0,
            daysOfWeek: [],
            dayOfMonth: 0
         },
         habitStatus: "active",
         addDate: "13/07/2026",
         modifyDate: "13/07/2026"
        },
        {id: 6, 
         title: "Learn React", 
         description: "Every day if I can",
         frequency: "Daily",
         frequencyConfig: {
            interval: 0,
            daysOfWeek: [],
            dayOfMonth: 0
         },
         habitStatus: "active",
         addDate: "13/07/2026",
         modifyDate: "13/07/2026"
        }                  
    ]);

    const [modal, setModal] = useState(false);

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
                {modal && <AddHabit closeModal={toggleModal} />}
            </div>
        </>
    )
}

export default Habits;
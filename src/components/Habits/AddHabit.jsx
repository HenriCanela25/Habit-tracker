import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useContext } from "react";
import { HabitContext } from "../../context/HabitContext";
import TextInput from "../Form/TextInput";
import Frequency from "../Form/Frequency";
import DaysOfWeek from "../Form/DaysOfWeek";
import IntervalSelect from "../Form/IntervalSelect";
import DayOfMonth from "../Form/DayOfMonth";
import ColorPicker from "../Form/ColorPicker";
import Button from "../Button/Button";
import CancelButton from "../Button/CancelButton";
import "./AddHabit.css";

const AddHabit = ({ closeModal, generateAlert }) => {

    const { setHabits, getNextId } = useContext(HabitContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [frequency, setFrequency] = useState('daily');
    const [daysOfWeek, setDaysOfWeek] = useState([
       {id: 1, name: 'S', selected: false},
       {id: 2, name: 'M', selected: false},
       {id: 3, name: 'T', selected: false},
       {id: 4, name: 'W', selected: false},
       {id: 5, name: 'T', selected: false},
       {id: 6, name: 'F', selected: false},
       {id: 7, name: 'S', selected: false},
    ]);
    const [interval, setInterval] = useState(2);
    const [dayOfMonth, setDayOfMonth] = useState(1);
    const [color, setColor] = useState('#e8935f');
    const colorList = ['#e8935f', '#7fa3c4', '#8fbf8a', '#c48fbf', '#c4a98f', '#d4c46a'];

    const handleForm = (e) => {
        e.preventDefault();

        // days of week selected
        const daysSelected = daysOfWeek.filter(day => day.selected).map(day => day.id);

        const currDate = new Date();

        // Validations

        if (title === '' || (frequency === 'weekly' && daysSelected.length === 0)) {
            generateAlert('fail', `Make sure that all inputs are correct.`);
            return;
        }

        setHabits(prevState => [
            ...prevState,
            {
                id: getNextId, 
                title: title, 
                description: description,
                frequency: frequency,
                frequencyConfig: {
                    interval: interval,
                    daysOfWeek: daysSelected,
                    dayOfMonth: dayOfMonth
                },
                color: color,
                habitStatus: "active",
                addDate: currDate,
                modifyDate: currDate
            }            
        ]);

        closeModal();
        
        generateAlert('success', `"${title}" was added to your list.`);
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modalHeader">
                    <p className="headerTitle">New habit</p>
                    <button 
                    onClick={closeModal}
                    className="closeBtn"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="modalInputs">
                    <form onSubmit={(e) => handleForm(e)}>
                        <TextInput value={title} onChange={setTitle} label={'title'} placeholder={'Morning workout'} required={true} maxLength={25} />
                        <TextInput value={description} onChange={setDescription} label={'description'} placeholder={'Add a note about this habit...'} required={false} />
                        <Frequency frequency={frequency} onChange={setFrequency} />
                        { frequency === 'weekly' && <DaysOfWeek daysOfWeek={daysOfWeek} setDaysOfWeek={setDaysOfWeek} /> }
                        { frequency === 'interval' && <IntervalSelect interval={interval} setInterval={setInterval} /> }
                        { frequency === 'monthly' && <DayOfMonth dayOfMonth={dayOfMonth} setDayOfMonth={setDayOfMonth} /> }
                        <ColorPicker colorList={colorList} color={color} setColor={setColor} />
                        <div className="btn-group">
                            <CancelButton text='Cancel' handleClick={closeModal} />
                            <Button text='Create habit' type='create' />  
                        </div>                
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddHabit;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./AddHabit.css";

const AddHabit = ({closeModal}) => {

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
            </div>
        </div>
    );
}

export default AddHabit;
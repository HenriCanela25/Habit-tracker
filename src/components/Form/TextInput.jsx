import { useState } from 'react';
import './TextInput.css';

const TextInput = ({value, onChange, label, placeholder, required, maxLength}) => {

    const [inputFocus, setInputFocus] = useState(false);

    return (
        <div className="textInput">
            <label htmlFor={label}>{label.toUpperCase()}</label>
            <input 
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => setInputFocus(true)}
            id={label} 
            name={label} 
            placeholder={placeholder}
            maxLength={maxLength}
            />
            {!required && <span className='optionalText'>Optional</span>}
            {required && value === '' && inputFocus && <span className='errorMessage'>{label} is required!</span>}
        </div>     
    )
}

export default TextInput;
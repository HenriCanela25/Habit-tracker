import './ColorPicker.css';

const ColorPicker = ({ colorList, color, setColor }) => {

    return (
        <div className="color-picker">
            <span>COLOR</span>
            <div className="colors">
                {colorList.map(colorItem => {
                    return (
                        <button 
                        key={colorItem}
                        type='button'
                        style={{backgroundColor: colorItem, border: `${color === colorItem ? '2px solid white' : '2px solid transparent'}`}}
                        onClick={() => setColor(colorItem)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ColorPicker;
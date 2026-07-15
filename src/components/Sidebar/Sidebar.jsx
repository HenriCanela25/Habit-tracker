import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { MenuContext } from '../../context/MenuContext';
import './Sidebar.css';

const Sidebar = () => {

    const {items, selectItem} = useContext(MenuContext);

    return (
        <>
        <div id="sideBar">
            <nav>
                <h1 className="title"><FontAwesomeIcon icon={faFireFlameCurved} color='#e8935f' />Habits Tracker</h1>
                <ul>
                    {items.map(item => {
                        return (
                            <li 
                                key={item.id}
                                onClick={() => selectItem(item.id)}
                                className={`navItem ${item.selected ? 'navItemSelected' : ''}`}
                            >
                                <FontAwesomeIcon icon={item.icon} className="item-icon" />
                                {item.title}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Sidebar;
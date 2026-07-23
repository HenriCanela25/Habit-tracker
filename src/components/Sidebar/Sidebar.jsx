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
                <div className="title">
                    <FontAwesomeIcon className='icon' icon={faFireFlameCurved} color='#e8935f' />
                    <h1>Habits Tracker</h1>
                </div>
                <ul>
                    {items.map(item => {
                        return (
                            <li 
                                key={item.id}
                                onClick={() => selectItem(item.id)}
                                className={`navItem ${item.selected ? 'navItemSelected' : ''}`}
                            >
                                <FontAwesomeIcon icon={item.icon} className="item-icon" />
                                <span className='sidebar-option'>{item.title}</span>
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
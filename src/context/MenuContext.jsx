import { createContext, useState } from "react";
import { faCalendarDay, faSeedling, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';

const MenuContext = createContext(undefined);

export const MenuProvider = ({children}) => {
    const [items, setItems] = useState([
        {id: 1, title: "Today", icon: faCalendarDay, selected: false},
        {id: 2, title: "Habits", icon: faSeedling, selected: true},
        {id: 3, title: "Dashboard", icon: faSquarePollVertical, selected: false},
    ]);

    return (
        <MenuContext.Provider
            value={{
                items,
                selectItem: (id) => setItems(prevItems => 
                    prevItems.map(item => ({
                        ...item,
                        selected: item.id === id
                    }))
                )
            }}
        >
            {children}
        </MenuContext.Provider>
    )
};

export { MenuContext };
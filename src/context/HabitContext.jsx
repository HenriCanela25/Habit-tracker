import { createContext, useEffect, useState } from "react";

const HabitContext = createContext(undefined);

export const HabitProvider = ({ children }) => {

    const [habits, setHabits] = useState(() => {
        const saved = localStorage.getItem('habits');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habits));
    }, [habits]);

    return (
        <HabitContext.Provider
        value={{
            habits,
            setHabits,
            getNextId: habits.length+1
        }}
        >
            {children}
        </HabitContext.Provider>
    )
};

export { HabitContext };
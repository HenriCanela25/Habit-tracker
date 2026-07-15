import Sidebar from "./components/Sidebar/Sidebar";
import Habits from "./components/Habits/Habits";
import Dashboard from "./components/Dashboard/Dashboard";
import Today from "./components/Today/Today";
import { useContext } from "react";
import { MenuContext } from "./context/MenuContext";
import './App.css';

function App() {

  const {items} = useContext(MenuContext)
  const itemSelected = items.find(item => item.selected);

  return(
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          {itemSelected.id === 1 && <Today />}
          {itemSelected.id === 2 && <Habits />}
          {itemSelected.id === 3 && <Dashboard />}
        </main>
      </div>
  )
}

export default App

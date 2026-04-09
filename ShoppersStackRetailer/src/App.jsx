import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
       <Navbar toggleSidebar={() => setIsOpen(!isOpen)} /> 
       <Sidebar isOpen={isOpen} closeSidebar={() => setIsOpen(false)} />
    </div>
  );
};

export default App;

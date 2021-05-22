import React,{useState} from 'react';
import Main from "./main/Main"
import Navbar from './navbar/Navbar';
import Slidebar from './slidebar/Slidebar'

const App=() =>{
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar =()=>{
    setSidebarOpen(true);
  }
  const closeSidebar =()=>{
    setSidebarOpen(false);
    
  }
  return (
    <div className="container">
    <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main/>
      <Slidebar sidebarOpen= {sidebarOpen} closeSlidebar={closeSidebar} />
    </div>
  );
}

export default App;

import React,{UseState, useState} from 'react'
import Home from '../../pages/Home/Home'
import {FaAngleDoubleRight,FaAngleDoubleLeft} from 'react-icons/fa'
import "./Layout.css";
import Menus from '../Menus/Menus';
const Layout = () => {
    const [toggle,setToggle]=useState(false)

    //change toggle
    const handleToggle=()=>{
        setToggle(!toggle)
    }
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle?"sidebar-toggle sidebar":"sidebar"}>
            <div className="sidebar-toggle-icons">
                <p onClick={handleToggle}>
                    {
                        toggle?(<FaAngleDoubleLeft size={30}/>):(<FaAngleDoubleRight size={30}/>)
                    }
                </p>
            </div>
            <Menus toggle={toggle}/>
        </div>
        <div className="container">
        <Home/>
        </div>
      </div>
    </>
  )
}

export default Layout

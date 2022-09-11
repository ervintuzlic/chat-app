import React from 'react'
import Nav from '../components/Nav'
import Search from '../components/Search'
import Chats from '../components/Chats'


const Sidebar = () => {
  return (
    <div className="sidebar-container">
        <Nav />
        <Search />
        <Chats />
    </div>
  )
}

export default Sidebar
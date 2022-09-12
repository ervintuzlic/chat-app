import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="home-container">
        <div className="home-section">
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
}

export default Home
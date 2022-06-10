import { Avatar } from '@mui/material'
import React from 'react'
import '../styles/SidebarChat.css'
import Cat_looks from '../images/Cat_looks.png'

const Sidebarchat = () => {
  return (
    <div className='sidebarChat'>
        <Avatar src={Cat_looks}/>
        <div className='sidebarChat_info'>
            <h2>pryansh</h2>
            <p>got your keys!</p>
        </div>
    </div>
  )
}

export default Sidebarchat
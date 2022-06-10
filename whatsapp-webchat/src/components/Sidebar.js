import React from 'react'
import '../styles/Sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton, Avatar } from '@mui/material';
import Cat_looks from '../images/Cat_looks.png'
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  /* const styles = {
    sidebar: '',
  } */
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar src={Cat_looks}/>
        <div className='sidebar_headerRight'>
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>        
        </div>
      </div>
      {/* 
       */}
      <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchOutlinedIcon/>
          <input type='text' placeholder='search or start new chat'/>
        </div>
      </div>
      {/* 
       */}
      <div className='sidebar_chats'>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  )
}

export default Sidebar
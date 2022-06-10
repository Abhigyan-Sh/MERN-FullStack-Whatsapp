import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import '../styles/Chat.css'
import Cat_looks from '../images/Cat_looks.png'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import MicNoneIcon from '@mui/icons-material/MicNone';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src={Cat_looks}/>

        <div className='chat_headerInfo'>
          <h3>pryansh</h3>
          <p>last seen at...</p>
        </div>

        <div className='chat_headerRight'>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <IconButton>
            <AttachFileIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
          <p className='chat_message'>
            <span className='chat_name'>pryansh</span>
            got your keys!
            <span className='chat_timestamp'>{
              new Date().toUTCString()
            }</span>
          </p>
          <p className='chat_message chat_receiver'>
            <span className='chat_name'>pryansh</span>
            got your keys!
            <span className='chat_timestamp'>{
              new Date().toUTCString()
            }</span>
          </p>
          <p className='chat_message'>
            <span className='chat_name'>pryansh</span>
            got your keys!
            <span className='chat_timestamp'>{
              new Date().toUTCString()
            }</span>
          </p>
          <p className='chat_message'>
            <span className='chat_name'>pryansh</span>
            got your keys!
            <span className='chat_timestamp'>{
              new Date().toUTCString()
            }</span>
          </p>
      </div>
      
      <div className='chat_footer'>
        <IconButton>
          <AddReactionIcon/>
        </IconButton>
        <form>
          <input type='text' placeholder='type a message'></input>
          <button type='submit'>send</button>
        </form>
        <IconButton>
          <MicNoneIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default Chat
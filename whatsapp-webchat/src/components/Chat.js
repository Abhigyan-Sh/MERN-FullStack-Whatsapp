import { Avatar, IconButton } from '@mui/material'
import React, {useState} from 'react'
import '../styles/Chat.css'
import Cat_looks from '../images/Cat_looks.png'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import MicNoneIcon from '@mui/icons-material/MicNone';
import axios from '../axios'

const Chat = ({messages}) => {
  const [inputMsg, setInputMsg] = useState('')
  const submitInput = async (e) => {
    e.preventDefault()
    await axios.post('/api/v1/message/new', {
      message: inputMsg,
      timeStamp: "10:30:43",
      name: "Demo Name",
      received: true
    })
    setInputMsg('')
  }

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
        {
          messages.map((eachMsg) => {
          return (
            <p key={eachMsg._id} className={`chat_message ${eachMsg.received && 'chat_receiver'}`}>
              <span className='chat_name'>{eachMsg.name}</span>
              {eachMsg.message}
              <span className='chat_timestamp'>{
                eachMsg.timeStamp
                // new Date().toUTCString()
              }</span>
            </p>
          )
        })
        }
      </div>
      
      <div className='chat_footer'>
        <IconButton>
          <AddReactionIcon/>
        </IconButton>
        <form>
          <input 
          type='text' 
          placeholder='type a message'
          onChange={(e) => setInputMsg(e.target.value)}
          value={inputMsg}/>
          <button type='submit' onClick={submitInput}>send</button>
        </form>
        <IconButton>
          <MicNoneIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default Chat
// 
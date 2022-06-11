import './App.css'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import React, {useEffect, useState} from 'react'
import Pusher from 'pusher-js'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('api/v1/message/sync').then((response) => {
      setMessages(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('d887d95278223676af1f', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessages) {
      // alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessages])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)
  return (
    <div className="app">
      <div className='app__body'>
        <Sidebar />
        <Chat messages= {messages}/>
      </div>
    </div>
  )
}

export default App
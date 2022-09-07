- using firebase following steps,
- went to firebase on left menu > settings > Firebase SDK snippet - Config (copy)
- using firebase for `authentication` and `hosting`
- websockets ?
- for real time functionality we will be using 1.mongoDB's change-stream 2. pusher
so if there is some change in mongoDB's data then it's gonna fire-off `change-stream` and in return its gonna fire-off `pusher` which fires off axios or fetch on the front-end which will then refresh all the conversation.
- creating firebase.js and pasting Config in it from path specified above.

### outline of web application
`appBody` behouses `sidebar` and `chat`

### webSockets
suppose a leadersboard in a online multiplayer, now in here if we want the leadersboard to be live then we may either
- tell them to refresh every now and then which will allow client to send a http request.
- or we ourselves set a refresh timer
- or we could use webSockets, so for using it first we send a `connection request` and then only if the request gets accepted we send a `data request` since TCP got kicked-off so we can do this action now.


> Structure of WebApp
.app(grid, 100vh, place-items center)
  .app__body(flex margin-top:-50px 90vh 90wh box-shadow)
    .sidebar(flex flex0.35 column)
    .chat(flex flex0.65 column)

in chat component
we have
header - Avatar, header_info, header_right
chatBody - background-image repeat position padding overflow-y flex:1
  span for name
  now comes the message
  span for timestamp - {new Date().toUTCString()}

  [chat messages got to the left by default and to shift them to right i used margin-left: auto;]

inputField - 

> got to know why material-ui icons over awesomefont icons
`now everytime you are about to use an icon use it with wrap of IconButton`
`.sidebar_searchContainer > .MuiSvgIcon-root`
``
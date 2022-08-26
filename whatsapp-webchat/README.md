# insights

## Process:
- `npm init` (though not necessary)
- `npm i express mongoose pusher`
created `index.js`

- created a new project on mongoDB
- created a cluster then, (`0.0.0.0/0` , is the ip address used to allow all ip address to connect)

Messages have to be even sent back since some changes ocurred in DB.
- so firebase had this desired feature, and other websites having blogs might have been having `pusher` which reflects back data on frontend.
- so mongoDB team thought to create some hook which could be pugged to `pusher` and they did so by creating `changeStream`.
- so whenever data on mongoDB changes, mongoDB invokes `changeStream` which in turn invokes `pusher`(middleware) which then updates data on front-end.

- to see changes on pusher site, we need to keep the 'Debug Console' open when we are making a request from postman.
- so yeah we realize that pusher is getting turned on when it watches a change on mongoDB. We went from mongoDB to changeStream to pusher...
- node is for production and nodemon is like for when we are in development.\
- ES and commonjs(type: module or .mjs things)

- just for heruko deployment, plucking out all security checks **Don't use for production**
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next()
})

- using firebase following steps,
- - went to firebase on left menu > settings > Firebase SDK snippet - Config (copy)
- - using firebase for `authentication` and `hosting`
- - websockets ?
- - for real time functionality we will be using 1.mongoDB's change-stream 2. pusher
so if there is some change in mongoDB's data then it's gonna fire-off `change-stream` and in return its gonna fire-off `pusher` which fires off axios or fetch on the front-end which will then refresh all the conversation.
- - creating firebase.js and pasting Config in it from path specified above.

### webSockets
suppose a leadership board in a online multiplayer, now in here if we want the leadership board to be live then we may either.
[x] tell them to refresh every now and then which will allow client to send a http request.
[x] or we ourselves set a refresh timer
[] or we could use webSockets, so for using it first we send a `connection request` and then only if the request gets accepted we send a `data request` since TCP got kicked-off so we can do this action now.


> Structure of WebApp
```
.app(grid, 100vh, place-items center)
  .app__body(flex margin-top:-50px 90vh 90wh box-shadow)
    .sidebar(flex flex0.35 column)
    .chat(flex flex0.65 column)
```
in chat component we have[^1].
[^1]: header - Avatar, header_info, header_right
[^2]: chatBody - background-image repeat position padding overflow-y flex:1
  span for name
  now comes the message
  span for timestamp - {new Date().toUTCString()}

[^3]:  [chat messages got to the left by default and to shift them to right i used margin-left: auto;]
# insights

## Process:
npm init\
npm i express mongoose\
created index.js\

created a new project on mongoDB\
created a cluster then,\
you did it now!\
(0.0.0.0/0 , is the ip address used to allow all ip address to connect)\

> now to connect to our database
`On the DB side`\
- set a database user.\
- set network access.\
go in SECURITY, database access and network access.. OR you might have already done that\
`On the backend side`\
- get the connection string and use mongoose to connect to the mongoDB\
mongoose is doctor strange which makes use of connection string to connect to DB.\
mongoDB reflects if you have been connected now.\
got connected to DB in three words mongoose connect connection_string\

- create dbMessages.js for defining data schema\
remember dbMessages is a Model and Model.crud_operation() will return mongoose query object.\
> CRUD Operations using Model object which we created above
### creating data on mongoDB
- but first, Model.create(), which does create new documents in mongoDB collections.\
can be done through post request.\
Model is schema file.\
now when request is sent, then since post request on this specified path is ...blah ..blah hence `Messages.create(req.body)` does post data to mongoDB and we can view it there.\
### reading data from mongoDB
- Messages.find({}) will help here to get all documents from mongoDB.\

> connecting back-end to front-end
### how to?
- we can push data from front-end to backend and then backend can send it to mongoDB.\
- but then it has to be even sent back since some changes occured in DB.\
- so firebase had this desired feature, and other websites having blogs might have been having `pusher` which reflects back data on frontend.\
- so mongoDB team thought to create some hook which could be pugged to `pusher` and they did so by creating `changeStream`. \
- so whenever data on mongoDB changes, mongoDB invokes `changeStream` which in turn invokes `pusher`(middleware) which then updates data on front-end. \
### steps
- go to pusherjs site and create an app \
  get the code to copy n paste in below app config comment in index.js \
  npm i pusher and import \

### setting up mongoDB to frontend communication
- `changeStream`
  - - mongoose connection once open \
  - - db.collection('') \
  - - msgCollection.watch() \
  - - changeStream.on('change', () => {}) \
  `mongoose connection once open get the collection and watch it and on change boom boom`\
- `pusher` \
  - - 
  - - changeStream.on('change', (change) => {}) \
      if(change.operationType === 'insert') {} \
      change.fullDocument \
      ... \
      ... \
    remember change is a huge object\
  `if change type isisis insert details are then fullDocument then push the trigger`\

- to see changes on pusher site, we need to keep the 'Debug Console' open when we are making a request from postman.\
so yeah we realize that pusher is getting turned on when it watches a change on mongoDB.\
we went from mongoDB to changeStream to pusher...

- just for heruko\
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next()
})

> making front-end dynamic
- did some tweak with headers well not necessary..\
- just copy n paste code from pusher site for front-end\
its super easy, refactor pasted code with- subscribe to channel and bind to 'inserted'\
install pkg named 'pusher-js' for front-end.\
said it already, its super easy.\
and now with default code pasted alert pops-up.\

- npm i axios\
- create and write axios.js\
- in app.js\
  - import axios from './axios' \
  (Axios: Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6)
  - make another useEffect, the one which is placed first.\
  so axios just brings in data to our webApp and then dies saying 'ab tumhare hawale watan sathiyo' axios does it by having a file axios.js importing it here in app.js where it just sets messages using setMessages setter function which later gets used elsewhere 
  as: setMessages(...messages, newMessages)

- passing messages as prop into the Chat functional component n later dealing with it..
> now to make input box functionable

## what is mongoDB
its a no `SQL Database`\
its super `beginner friendly` and `super easy to use`.\

## learned more
 - a little regarding styling layout is in front-end
 - creating new projects in mongoDB.\
 - ES and commonjs(type: module or .mjs things)\
 - mongoose is a connectivity tool.\
 - a lot can be done with package.json\
 - `npm i` is an alias for `npm install`, so yeah there's no difference between the two.\
 - mongoose is a connectivity tool for connecting to mongoDB\
 - setting up PORT
 - before we could run this app we have to make it listen to what we say
 - mongoose is for connecting to db saying those 3 magical words and then defining data Schema also, then to watch for any change on mongoDB, 
 - so as we can use postman's sending request object json feature for post requests we need to use a middleware here in code..\
 `app.use(express.json())`
 - Messages.create(newMessage, (err, data) => { \
   Messages.create(newMessage, (data, err) => { \
       both have a difference 500 and with later 201 \
       the one which is being used in if(){} should be placed first \
       i.e. \
       with first one , if(err) {} \
       with later, if(data) {} \
 - 

## to say
 - node is for production and nodemon is like for when we are in development.\
 - with version 6 code for connection block to mongoDB got even smaller.\ 
 - 

## suggestions
- look at dev memes\
- 
- 
- 
- 
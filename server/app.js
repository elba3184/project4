const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, '.env')
})

const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const nocache = require('nocache')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
//database connection
const Chat = require("./models/Chat");
// const connect = require("./dbconnect");
require('./configs/database')
const dateTime = require("simple-datetime-formater");
const chatRouter = require("./routes/chatroute");
// const loginRouter = require("./routes/loginRoute");


const app = express()



const app_name = require('./package.json').name
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
)



app.use(nocache())

// Set "Access-Control-Allow-Origin" header
app.use(
  cors({
    origin: (origin, cb) => {
      cb(null, origin && origin.startsWith('http://localhost:'))
    },
    optionsSuccessStatus: 200,
    credentials: true,
  })
)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())

// Set the public folder to "~/client/build/"
// Example: http://localhost:5000/favicon.ico => Display "~/client/build/favicon.ico"
// app.use(express.static(path.join(__dirname, '../client/build')))

// Enable authentication using session + passport
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'irongenerator',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    }),
  })
)
require('./passport')(app)







app.use('/api', require('./routes/index'))
app.use('/api', require('./routes/auth'))
app.use('/api', require('./routes/users'))
app.use("/chats", chatRouter);
// app.use('/api/countries', require('./routes/countries'))

// // For any routes that starts with "/api", catch 404 and forward to error handler
// app.use('/api/*', (req, res, next) => {
//   let err = new Error('Not Found')
//   err.status = 404
//   next(err)
// })

// Error handler
app.use((err, req, res, next) => {
  console.error('----- An error happened -----')
  console.error(err)

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(err.status || 500)

    // A limited amount of information sent in production
    if (process.env.NODE_ENV === 'production') res.json(err)
    else
      res.json(JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err))))
  }
})




//require the http module
const http = require("http").Server(app);

// require the socket.io module
const io = require("socket.io");
const socket = io(http);

//setup event listener
socket.on("connection", socket => {
  console.log("user connected");

  socket.on("disconnect", function () {
    console.log("user disconnected");
  });

  //Someone is typing
  socket.on("typing", data => {
    socket.broadcast.emit("notifyTyping", {
      user: data.user,
      message: data.message
    });
  });

  //when soemone stops typing
  socket.on("stopTyping", () => {
    socket.broadcast.emit("notifyStopTyping");
  });

  socket.on("chat message", function (msg) {
    console.log("message: " + msg);

    //broadcast message to everyone in port:5000 except yourself.
    socket.broadcast.emit("received", { message: msg });

    //save chat to the database
    connect.then(db => {
      console.log("connected correctly to the server");
      let chatMessage = new Chat({ message: msg, sender: "Anonymous" });

      chatMessage.save();
    });
  });
});



module.exports = app








// const path = require('path')
// require('dotenv').config({
//   path: path.join(__dirname, '.env')
// })

// const bodyParser = require('body-parser')
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// const express = require('express')
// const mongoose = require('mongoose')
// const logger = require('morgan')
// const nocache = require('nocache')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const Unsplash = require('unsplash-js').default;



// require('./configs/database')

// const app_name = require('./package.json').name
// const debug = require('debug')(
//   `${app_name}:${path.basename(__filename).split('.')[0]}`
// )

// const app = express()

// app.use(nocache())

// // Set "Access-Control-Allow-Origin" header
// app.use(
//   cors({
//     origin: (origin, cb) => {
//       cb(null, origin && origin.startsWith('http://localhost:'))
//     },
//     optionsSuccessStatus: 200,
//     credentials: true,
//   })
// )
// app.use(logger('dev'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//   extended: false
// }))
// app.use(cookieParser())

// const unsplash = new Unsplash({
//   applicationId: process.env.UNSPLASH_ACCESSKEY,
//   secret: process.env.UNSPLASH_SECRETKEY
// });


// // Set the public folder to "~/client/build/"
// // Example: http://localhost:5000/favicon.ico => Display "~/client/build/favicon.ico"
// app.use(express.static(path.join(__dirname, '../client/build')))

// // Enable authentication using session + passport
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || 'irongenerator',
//     resave: true,
//     saveUninitialized: true,
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection
//     }),
//   })
// )
// require('./passport')(app)

// app.use('/api', require('./routes/index'))
// app.use('/api', require('./routes/auth'))

// // For any routes that starts with "/api", catch 404 and forward to error handler
// app.use('/api/*', (req, res, next) => {
//   let err = new Error('Not Found')
//   err.status = 404
//   next(err)
// })

// // For any other routes, redirect to the index.html file of React
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'))
// })

// // Error handler
// app.use((err, req, res, next) => {
//   console.error('----- An error happened -----')
//   console.error(err)

//   // only render if the error ocurred before sending the response
//   if (!res.headersSent) {
//     res.status(err.status || 500)

//     // A limited amount of information sent in production
//     if (process.env.NODE_ENV === 'production') res.json(err)
//     else
//       res.json(JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err))))
//   }
// })

// module.exports = app
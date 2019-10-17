const mongoose = require('mongoose')

// Don't forget to set "MONGODB_URI" in ~/server/.env
const uri =
  process.env.MONGODB_URI ||
  `mongodb://localhost/final-project`

mongoose.Promise = Promise;

mongoose
  .connect(uri, {
    useNewUrlParser: true
  }, { useMongoClient: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

//mongodb+srv://elba:elba@cluster0-w3igi.mongodb.net/aesthetic?retryWrites=true&w=majority
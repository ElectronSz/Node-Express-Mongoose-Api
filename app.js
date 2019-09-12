const llg = require("llg").llg
const app = require('./express/index.js')
const db = require('./config/db.js')


//connect to mongodb[failed]
db.on('error', function() {
    llg("Connetion errror!")
});

//connect to mongodb[success]
db.once('open', function() {
 llg("Connected to database...")
});

//start server and listen to port 3000
app.listen(3000, () => {
    llg("Listening at 127.0.0.1:3000...");
});
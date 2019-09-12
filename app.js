const llg = require("llg").llg
const app = require('./express/index.js')
const db = require('./config/db.js')

db.on('error', function() {
    llg("Connetion errror!")
});
db.once('open', function() {
 llg("Connected to database...")
});

app.listen(3000, () => {
    llg("Listening at 127.0.0.1:3000...");
});
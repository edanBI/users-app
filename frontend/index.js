
const path = require('path');
const express = require('express')
const ejs = require('ejs');

const { getUsers } = require("./services/users");

const PORT = process.env.PORT || 8080

const app = express()

app.get('/healthcheck', (req, res) => { 
  console.log('healthcheck')
  res.sendStatus(200); 
})

app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "pages"));

app.get('/', async (req, res) => {
  
  try {
    console.log('trying to get users...')
    const users = await getUsers();
    console.log('users:');
    console.log(users);
    res.render("index", {users});
  } catch(err) {
    res.render("error", {error: err});
  }

});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

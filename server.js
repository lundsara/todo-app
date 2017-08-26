const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(express.static(__dirname + "/public"));

app.get('/',(req,res)=>{
  res.render('todos/todo-index');
});



const todoRoutes = require('./routes/todo-routes');
app.use('/todos', todoRoutes);




const port = 3000;
app.listen(port, () => {
  // to prove it worked, print to the terminal
  console.log(`My awesome app is listening on port ${port}`);
})

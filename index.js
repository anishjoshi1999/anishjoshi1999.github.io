const express = require('express');
const app = express();
const path = require('path');
const publicDirectoryPath = path.join(__dirname,'./public');

app.use(express.static(publicDirectoryPath));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.get('/',(req,res)=>{
	res.render('index')
})


app.listen(3000,()=>{
	console.log("Listening to port 3000")
})
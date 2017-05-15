const express = require('express');
const hbs = require('hbs');

const port= process.env.PORT || 3000;

var app= express();


app.set('view engine','hbs');

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pageTitle:'KICK STREAM'
  });
});
app.get('/sfr-1',(req,res)=>{
  res.render('sfr-1.hbs',{
    pageTitle:'SFR1 SPORT'
  });
});
app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});

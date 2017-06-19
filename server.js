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
app.get('/rtp-1-portugal',(req,res)=>{
  res.render('rtp-1-portugal.hbs',{
    pageTitle:'RTP1'
  });
});
app.get('/match-tv',(req,res)=>{
  res.render('match-tv.hbs',{
    pageTitle:'MATCH! TV'
  });
});
app.get('/first-tv-ru',(req,res)=>{
  res.render('first-tv-ru.hbs',{
    pageTitle:'FIRST TV RU'
  });
});
app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});

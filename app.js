import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyparser from 'body-parser';
import ejs from 'ejs';
import home from './router/new.js';
import jet from './router/new.js';
const app=express();


app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.use('/', home);
 
app.use('/jet',jet);

let port=process.env.PORT;
if(port==null || port==""){
    port=3000;
}

app.listen(3000, function(){
    console.log('server is running bro')
})
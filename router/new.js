import express, { application } from 'express';
import axios from 'axios';


const router =express.Router();


 router.get('/',function(req,res){
    res.render('home.ejs');

});
router.post('/', async function(req,res){
    try{
        const  {chapter, verse}=req.body;
     const response= await axios.get("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/" +chapter+"/verses/"+verse+"/",{

    headers :{
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }

     })   ;
     // console.log(response.data);
        res.render('jet.ejs',{info:response.data});
    }catch(error){
        console.error(error)
    }


});






export default  router
const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('Hola what a world bro ....');    
})

app.listen(3000,function(){
    console.log('Server is running on port 3000');
});
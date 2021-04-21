const express = require('express');
const app = express();
const userroute = require('./routes/userroute')
const bodyparser = require('body-parser')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/api/user',userroute)



app.get('/',(req,res)=>{

    res.send('This is backend')


    
})

app.listen(5000,()=>{
    console.log('Server started on port 5000');
})
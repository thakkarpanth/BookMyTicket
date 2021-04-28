import express from 'express' ; 

const app = express(); 
app.use(express.json()); 

app.get('/api/users/currentuser' , (req , res) => {
    console.log("request recieved") ;
    res.send("Hi There");
})

app.listen(3000 , () => {
    console.log("Listening on Port 3000!!!!!!!!") ;
})


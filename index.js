import express,{json} from 'express';
import router from './routes/userRoute.js';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/myapp')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

const app = express();
app.use(json())

app.use('/',router)

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(8000,()=>{
    console.log("Server is listening to port 8000");
    
})
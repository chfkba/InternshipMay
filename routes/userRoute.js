import {Router} from 'express';
import User from '../models/user.js';
const router = Router();

//let Id;

router.post('/setData',(req,res)=>{
    // const {id} = req.body;
    // Id = id;
    // console.log("The value of Id",Id);
    // res.status(200).json(Id);

    const {fname,lname,username} = req.body;
    const user = new User({ fname, lname, username });
    user.save()
        .then(() => {
            res.status(201).json({ message: "User created successfully" });
        })
        .catch((err) => {
            console.error("Error creating user", err);
            res.status(500).json({ error: "Internal server error" });
        });
    
})

router.get('/getData', (req, res) => {
   // res.send("The value of Id is " + Id);
   // console.log("Id",Id);
    // res.status(200).json(Id)
    const { fname, lname } = req.query;
    User.findOne({ fname, lname })
        .then((user) => {
            if (user) {
                res.status(200).json({ username: user.username });
            } else {
                res.status(404).json({ error: "User not found" });
            }
        })
        .catch((err) => {
            console.error("Error fetching user", err);
            res.status(500).json({ error: "Internal server error" });
        });

    
})

export default router;
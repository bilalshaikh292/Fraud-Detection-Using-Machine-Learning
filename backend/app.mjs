import express from 'express';
import cors from 'cors';
import axios from 'axios';


const app = express();



app.use(cors());
app.use(express.json())


app.get("/",(req,res) => {
    res.send("Hello World") 
 });

app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    if (username === 'admin' && password === 'admin' || username === 'test' && password === '0000') {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });

export default app;
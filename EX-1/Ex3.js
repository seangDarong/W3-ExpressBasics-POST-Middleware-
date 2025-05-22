const express = require('express');
const app = express();
const filepath = './submissions.txt';
const fs = require('fs');

app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send('Welcome to the Home Page');
})

app.get('/contact',(req,res)=>{
    res.send(`<form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
        </form>`)
})

app.post('/contact',(req,res)=>{
    const input =req.body.name;
    fs.writeFileSync(filepath, input);

    res.send('Submission received and saved');
})

app.use((req,res)=>{
    app.status(404).send('404 not found');
})
app.listen(3000,()=> console.log('Server is running at http://localhost:3000'));
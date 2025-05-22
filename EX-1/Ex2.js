const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send(`<html>
                        <head><title>Home</title></head>
                        <body>
                            <h1>Welcome to the Home Page</h1>
                            <p>This is a simple Node.js server.</p>
                        </body>
                    </html>`)
})

app.get('/about',(req,res)=>{
    res.send(`<html>
                            <head><title>About Us</title></head>
                            <body>
                                <h1>About us: at CADT, we love node.js!</h1>
                            </body>
                        </html>`)
})

app.get('/contact-us',(req,res)=>{
    res.send(`
        <html>
                        <head><title>Contact Us</title></head>
                        <body>
                            <h1>You can reach us via email…</h1>
                        </body>
                    </html>
        `)
})

app.get('/products',(req,res)=>{
    res.send(`<html>
                    <head><title>Products</title></head>
                    <body>
                        <h1>Buy one get one…</h1>
                    </body>
                </html>`)
})

app.get('/projects',(req,res)=>{
    res.send(`<html>
                <head><title>Projects</title></head>
                <body>
                    <h1>Here are our awesome projects</h1>
                </body>
            </html>`)
})

 app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(3000, ()=> console.log('Server is running at http://localhost:3000'));
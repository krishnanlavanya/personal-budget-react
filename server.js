const express = require('express');
const app = express()
const cors = require('cors');
const port = 3000;

app.use(cors());




app.get('/hello',(req, res) =>{
    res.send('Hello World!');
});

app.get('/budget',(req, res) => {
    const budget_data =require('./budget.json');
    res.json(budget_data);
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:'+port);
});
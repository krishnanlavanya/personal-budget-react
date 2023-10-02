const express = require('express');
const app= express();
const port = 3001;

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/budget', (req, res) => {
    const data=require('./new.json')
    res.json(data);
  });
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
  

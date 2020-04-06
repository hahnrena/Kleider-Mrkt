const path = require('path');
const express = require('express');
const app = express();


app.use(express.static('client/build'));
    
app.get('*', (req, res) => {
    console.log(req, res)
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});


const PORT = process.env.PORT || 5000;  
app.listen(PORT);
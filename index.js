const express = require('express');

const app = express();

app.use(express.static('client'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
    });


const PORT = process.env.PORT || 3000;  
app.listen(PORT);
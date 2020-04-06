const path = require('path');
const express = require('express');
const app = express();

const clientPath = path.join(__dirname, '..', 'client');

app.use(express.static(clientPath));
    
app.get('*', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'))
});


const PORT = process.env.PORT || 3000;  
app.listen(PORT);
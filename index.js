var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
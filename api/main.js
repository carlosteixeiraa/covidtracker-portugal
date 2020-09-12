var express = require('express');
var colors = require('colors');
var app = express();
var port = 1019;




// route - get all info 
app.get('/api/v1/:apikey/all', (req, res) => {

    

});





// listening func
app.listen(port, () => {

    var runmsg = 'COVID TRACKER API - running on port ' + port
    console.log(runmsg.green)

});

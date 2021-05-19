const express = require('express');
const path = require('path');
const ngApp = express();
ngApp.use(express.static('./dist/football-data-101'));
ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/football-data-101/index.html'));
});
ngApp.listen(process.env.PORT || 8080);
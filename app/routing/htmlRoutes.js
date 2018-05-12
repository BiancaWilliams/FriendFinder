var path = require('path');

module.exports = function (app) {

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'))
  });
  //set def to user to homepage
  app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'))
  });

}
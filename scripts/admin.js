// HUBOT_SLACK_TOKEN=xoxb-6837402113-530700611063-cOHc5DDNhiT81Wk2Mn8ZWI9m ./bin/hubot --adapter slack
var tableify = require('tableify');

module.exports = function(robot) {
  robot.respond(/admin (.*)/i, function(res) {
    var command = res.match;
    command = command[1].split(' ');
    var param = command[1];
    command = command[0];
    switch(command) {
      case 'job-posting': // deploy ticket for QA
        robot.http("http://localhost:3000/jobposting/?title=" + param).get()( function(err, respond, body) {
          var txt = JSON.parse(body);
          console.log('body', body);
          txt = txt[0];
          console.log(txt);
          res.reply('\n Applicant Status: \n Position: ' + txt.title + '\n Applicant: ' + txt.applicant);
        });
        break;
      default:
        return res.reply('Invalid admin command');
        break;  
    }
  });
};

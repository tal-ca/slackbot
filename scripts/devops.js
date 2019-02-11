// HUBOT_SLACK_TOKEN=xoxb-6837402113-530700611063-cOHc5DDNhiT81Wk2Mn8ZWI9m ./bin/hubot --adapter slack
var shell = require('shelljs');
var path = require('path');

module.exports = function(robot) {
  robot.respond(/devops (.*)/i, function(res) {
    var command = res.match;
    command = command[1].split(' ');
    var param = command[1];
    command = command[0];
    switch(command) {
      case 'deploy': // deploy ticket for QA
        shell.exec(path.join(__dirname + '/deploy.sh ' + param), function(code, stdout, stderr) {
          res.reply(stdout);
        });
        break;
      case 'status': // get status
        shell.exec(path.join(__dirname + '/status.sh'), function(code, stdout, stderr) {
          res.reply(stdout);
        });
        break;
      case 'scale-up': // scale up
        shell.exec(path.join(__dirname + '/scale-up.sh ' + param), function(code, stdout, stderr) {
          res.reply(stdout);
        });
        break;
      case 'scale-down': // scale down
        shell.exec(path.join(__dirname + '/scale-down.sh ' + param), function(code, stdout, stderr) {
          res.reply(stdout);
        });
        break;
      default:
        return res.reply('Invalid devops command');
        break;  
    }
  });
};

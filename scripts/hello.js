// HUBOT_SLACK_TOKEN=xoxb-6837402113-530700611063-cOHc5DDNhiT81Wk2Mn8ZWI9m ./bin/hubot --adapter slack

module.exports = function(robot) {
  
  robot.hear(/munting prinsipe/i, function(res) {
    return res.send("Magandang Araw!");
  });
  
  robot.respond(/hello/i, function(res) {
    return res.reply("Hi!");
  });
};

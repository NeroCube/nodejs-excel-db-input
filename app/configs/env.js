var path = require('path');
module.exports = function() {
    var envConfig;
    envConfig = require(path.join(__dirname, 'configs.json'));
    return envConfig;
}
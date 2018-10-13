var client = require('./postgres.js');
module.exports = {
    getDatebaseCurrentTime: function(callback) {
        client.query("SELECT NOW()", function (err, result) {
            if(err) {
                return callback(err, null);
            }
            if(result.rows.length > 0) {
                return callback(null, result.rows[0]['now']);
            } else {
                return callback(null, null);
            }
        });

    }
}
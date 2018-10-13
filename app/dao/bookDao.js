var client = require('./postgres.js');
module.exports = {
    getAllBook: function(callback) {
        client.query('SELECT * FROM "BOOK";', function (err, result) {
            if(err) {
                return callback(err, null);
            }
            if(result.rows.length > 0) {
                return callback(null, result.rows);
            } else {
                return callback(null, null);
            }
        });

    },
    getBookByID: function(id, callback) {
        client.query('SELECT * FROM "BOOK" WHERE "ID" = $1;',
        [id], 
        function (err, result) {
            if(err) {
                return callback(err, null);
            }
            if(result.rows.length > 0) {
                return callback(null, result.rows[0]);
            } else {
                return callback(null, null);
            }
        });

    },
    createBook: function(name, callback) {
        client.query('INSERT INTO public."BOOK"("NAME") VALUES ($1) RETURNING "ID";', 
        [name],
        function (err, result) {
            if(err) {
                return callback(err, null);
            }
            if(result.rows.length > 0) {
                return callback(null, result.rows[0]['ID']);
            } else {
                return callback(null, null);
            }
        });

    }
}
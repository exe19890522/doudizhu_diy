const mysql = require('mysql');
let client = undefined;
const query = function (sql, cb) {
    console.log('query = ' + sql);
    client.getConnection(function (err, connection) {
        if (err) {
            console.log('connection mysql err = ' + err);
            cb(err);
            throw err;
        } else {
            connection.query(sql, function (connerr, result, fileds) {
                if (connerr) {
                    console.log('query err = ' + connerr);
                    cb(connerr);
                } else {
                    cb(null, result);
                }
                connection.release();
            })
        }
    });
};

exports.connect = function (config) {
    client = mysql.createPool(config);
};

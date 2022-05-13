var mysql = require('mysql');

const con = mysql.createConnection(
    {
        host:'200.3.193.22',
        port: '3306',
        database: 'P09728_1_11',
        user: 'P09728_1_11',
        password: 'ZCSaQGZU'
    }
);

module.exports.con = con;
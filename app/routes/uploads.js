var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage:storage});
var xlsx = require('node-xlsx').default;
var bookDao = require('../dao/bookDao');
var async = require('async');

router.post('/excel', upload.single('rawdata'), function(req, res, next) {
    var rawdata = xlsx.parse(req.file.buffer);
    if(typeof rawdata === 'undefined' || !rawdata) {
        return next({status: 404, message: 'Data is invalis'});
    }

    var datas = rawdata[0]['data'];
    datas.shift();
    async.waterfall([
        function(callback) {
            async.forEachOf(datas, function (value, key, callback) {
                bookDao.createBook(value[0], function(err, id) {
                    callback();
                });
            }, function (err) {
                callback();
            });
        },
        function(callback) {
            bookDao.getAllBook(function(err, result) {
                callback(null, result);
            });
        },
    ], function (err, result) {
        if(err) {
            return res.status(500).send({
                "result": err
            }).end();
        }
        return res.status(200).send({
            "result": result
        }).end();
    });
});

module.exports = router;
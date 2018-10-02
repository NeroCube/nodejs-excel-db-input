var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage:storage});
var xlsx = require('node-xlsx').default;
var uploadDao = require('../dao/uploadDao');

router.post('/excel', upload.single('rawdata'), function(req, res, next) {
    var rawdata = req.file.buffer;
    if(typeof rawdata === 'undefined' || !rawdata) {
        return next({status: 404, message: 'Data is invalis'});
    }

    var data = JSON.stringify(xlsx);
    return uploadDao.getDatebaseCurrentTime(function(err, result) {
        if(err) {
            err.status = 500;
            return next(err);
        }
        return res.status(200).send({
            "result": "success",
            "datas": datas,
            "db time": result
        }).end();
    });
});

module.exports = router;
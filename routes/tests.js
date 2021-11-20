const router = require('express').Router();
const Tests = require("../db/models/test");


router.get('/', (rea,res, next) => {
    const tests = Tests.findAll();
    res.send(tests)
})






module.exports = router;

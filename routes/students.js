const router = require('express').Router();
const Students = require('../db/models/student')

router.get('/', async (req, res, ) => {
    try {
        const students = await Students.findAll();
        res.send(students);
    } 
    catch(err) {
        next(err)
    }
});


router.get('/:id', async (req, res, next) => {
    try {
        const student = await Students.findByPk(req.params.id);
        res.send(student)
    } catch(err) {
        next(err)
    }
});

// router.get('/:id', async (req, res, ) => {
//     const id = req.params.id;
//     const student = await Students.findByPk(id);
//     res.send(student)
// })



// get(‘/:id’)
// post(‘/’)
// put(‘/:id’)
// delete(‘/:id’)

module.exports = router;

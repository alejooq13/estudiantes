const express = require('express');
const router = express.Router();

const Students = require('../models/students');

router.get('/',async(req, res)=>{
    const students= await Students.find();
    console.log(students)
    res.render('index',{
        students
    });
})

router.post('/add',async(req, res) => {
    const student = new Students(req.body);
    await student.save();
    res.redirect('/');
})

router.get('/done/:id', async(req, res) => {
    const {id} = req.params;
    const student = Students.findById(id);
    student.status = !student.status;
    await student.save();
    res.redirect('/');
})

router.get('/delete/:id', async(req, res) => {
    const {id} = req.params;
    await Students.remove({_id: id});
    res.redirect('/');
})

router.get('/edit/:id', async(req, res) => {
    const {id} = req.params;
    const student = await Students.findById(id);
    res.render('edit',{
        student
    });
});

router.post('/edit/:id', async(req,res) =>{
    const {id} = req.params;
    await Students.update({_id:id}, req.body);
    res.redirect('/');
})

module.exports = router;
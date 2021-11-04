const express=require('express');
const {ObjectId}=require('mongodb');
const router=express.Router();

const {Patient} =require('../models/Patient')

router.get('/',(req,res)=>{
    Patient.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("Error in retreiving the File : "+JSON.stringify(err))
        }
    })
})

router.post('/',(req,res)=>{
    const pat=new Patient({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        doctor:req.body.doctor,
        ward:req.body.ward
    })
    pat.save((err,docs)=>{
        if(!err) {res.send(docs);}
        else{console.log("error in inserting the file "+JSON.stringify(err))}
    })
})

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.send(`no record with given id: ${req.params.id} ` );

    Patient.findById(req.params.id,(err,doc)=>{
        if(!err) {res.send(doc);}
        else {  console.log('Error in finding the person :'+ JSON.stringify(err)) }
    });
});

router.put('/:id',(req,res)=>{
    const id=req.params.id;
    if(!ObjectId.isValid(id))
        return res.send(`no record with given id : ${req.params.id}`);
    const pat={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        doctor:req.body.doctor,
        ward:req.body.ward
    };
    Patient.findByIdAndUpdate(id,pat,{new:true},(err,doc)=>{
        if(!err) {res.send(doc);}
        else { console.log('error in updating the doctor :')+JSON.stringify(err)}
    })
})

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.send(`no record with given id : ${req.params.id}`);
    Patient.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc)}
        else{ console.log('error in deleting the Doctor :')+JSON.stringify(err)}
    })
})

module.exports=router;
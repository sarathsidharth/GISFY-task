const express=require('express');
const {mongoose}=require("./db");
const bodyParser=require('body-parser')
const cors=require('cors')

const app=express();

app.use(cors())
app.use(bodyParser.json())

const doctorController=require('../server/controler/doctorController');
app.use('/doctor',doctorController);

const patientController=require('../server/controler/patientController');
app.use('/patient',patientController);

const PORT=3003;
app.listen(PORT,()=>{console.log(`server started at PORT :${PORT}`)})
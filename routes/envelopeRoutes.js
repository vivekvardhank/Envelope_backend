const express= require('express');
const {getEnvelopes,addEnvelopes,getEnvelopeById,updateEnvelopeById,deleteEnvelopeById}=require('../controllers/envelopeController')
const route=express.Router();

//Envelope routes
route.get('/',getEnvelopes);
route.post('/',addEnvelopes);
route.get('/:id',getEnvelopeById);
route.put('/:id',updateEnvelopeById);
route.delete('/:id',deleteEnvelopeById);

module.exports=route;
const express= require('express');
const {getEnvelopes,addEnvelopes,getEnvelopeById,updateEnvelopeById,deleteEnvelopeById, transferEnvelopeAmount}=require('../controllers/envelopeController')
const route=express.Router();
const { body, validationResult } = require('express-validator');


const validateRequest = [
    body('title').notEmpty().isString(),
    body('budget').notEmpty().isNumeric(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

//Envelope routes
route.get('/',getEnvelopes);
route.post('/',validateRequest,addEnvelopes);
route.post('/:fromId/:toId',transferEnvelopeAmount);
route.get('/:id',getEnvelopeById);
route.put('/:id',updateEnvelopeById);
route.delete('/:id',deleteEnvelopeById);


route.use((req, res, next) => {
    res.status(404).send({ message: "Sorry, the requested link doesn't exist." });
});

module.exports=route;
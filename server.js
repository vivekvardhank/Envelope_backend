const express=require('express');
const app=express();
const { body, validationResult } = require('express-validator');
const envelopeRoutes=require('./routes/envelopeRoutes')
const PORT = process.env.PORT || 4000;

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

app.use(express.json());
app.use('/api/envelopes',validateRequest,envelopeRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT,()=>{
console.log(`server is listening on ${PORT}`);
})
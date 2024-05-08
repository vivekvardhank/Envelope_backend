const express=require('express');
const app=express();
const envelopeRoutes=require('./routes/envelopeRoutes')
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use('/api/envelopes',envelopeRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT,()=>{
console.log(`server is listening on ${PORT}`);
})
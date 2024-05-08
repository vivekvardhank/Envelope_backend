const {getEnvelopesData,addEnvelopesData,getEnvelopeDataById,updateEnvelopeDataById,deleteEnvelopeDataById,transferEnvelopesAmount}=require('../services/envelopeServices')

const getEnvelopes = (req, res) => {
    try {
        const envelopes = getEnvelopesData();
        if (envelopes) {
            res.status(200).json({ success: true, data: envelopes });
        } else {
            res.status(404).json({ success: false, message: "Empty Envelopes" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


const addEnvelopes=(req,res)=>{
    try {
        const newId=addEnvelopesData(req.body);
        if (newId) {
            const envelopes = getEnvelopesData();
            res.status(200).json({ success: true, data: envelopes });
        } else {
            res.status(404).json({ success: false, message: "Unable to insert new envelope" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
    
}

const getEnvelopeById=(req,res)=>{
    try{
        const id=req.params.id;
        const findings=getEnvelopeDataById(req);
        if(findings){
            res.status(200).json({ success: true, data: findings });
        }else{
            res.status(404).json({ success: false, message: `No data found with the id:${id}` })
        }

    }catch (error){
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const updateEnvelopeById=(req,res)=>{
    try{
    const id=req.params.id;
    const updatedEnvelopes=updateEnvelopeDataById(req);
    if(updatedEnvelopes){
        res.status(200).json({ success: true, data: updatedEnvelopes });
    }else{
        res.status(404).json({ success: false, message: `No data found with the id:${id}` })
    }

    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const deleteEnvelopeById=(req,res)=>{
    try{
        const id=req.params.id;
        const updatedEnvelopes= deleteEnvelopeDataById(req);
        if(updatedEnvelopes){
            res.status(200).json({ success: true, data: updatedEnvelopes });
        }else{
            res.status(404).json({ success: false, message: `No data found with the id:${id}` })
        }

    }catch (error){
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const transferEnvelopeAmount=(req,res)=>{
    try{
    const updatedEnvelopeData=transferEnvelopesAmount(req);
    if(typeof(updatedEnvelopeData)=== 'object'){
        res.status(200).json({ success: true, data: updatedEnvelopeData });
    }
    else if(typeof(updatedEnvelopeData)==='string'){
        res.status(400).json({ success: false, data: updatedEnvelopeData });
    }
   }catch(error){
       res.status(500).json({ success: false, message: "Internal server error" });
   }
   
}

module.exports = {
    getEnvelopes,
    addEnvelopes,
    getEnvelopeById,
    updateEnvelopeById,
    deleteEnvelopeById,
    transferEnvelopeAmount
};
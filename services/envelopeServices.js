let envelopes=require('../config/db');
const {getnewId}=require('../helpers/helper.js')

const getEnvelopesData=()=>{
    if(envelopes.length>0){
        return envelopes;
    }else{
        return null;
    }
}

const addEnvelopesData=(inputEnvelopeData)=>{
    const {title,budget}=inputEnvelopeData;
    if (!title || !budget) {
        throw new Error("Title and budget are required to add an envelope");
    }
    const newId =getnewId(envelopes);
    const newEnvelope={
        id:newId,
        title,
        budget:Number(budget),
    };
    envelopes.push(newEnvelope);
    return newId;
}

const getEnvelopeDataById=(req)=>{
    const id=parseInt(req.params.id);
    const findings=envelopes.find((item)=>{
        return item.id===id;
    });
    return findings !== undefined ? findings : null;
}


const updateEnvelopeDataById = (req) => {
    const targetId = parseInt(req.params.id);
    const { title, budget } = req.body;
    
    if (!title || !budget) {
        throw new Error("Title and budget are required to update the envelope");
    }
    let found = false; 
    const updatedEnvelopes = envelopes.map(item => {
        if (item.id === targetId) {
            found = true; 
            return { ...item, title: title, budget: Number(budget) };
        }
        return item;
    });
    if (!found) {
        return;
    }

    envelopes=updatedEnvelopes;
    return envelopes;
}

const deleteEnvelopeDataById=(req)=>{
    const targetId = parseInt(req.params.id);
    let found=false;
    const updatedEnvelopes = envelopes.filter(item =>{
        if(item.id===targetId){
            found=true;
            return false;
        }
        return true;
    })    
    if (!found) {
        return;
    }
    envelopes=updatedEnvelopes;
    return envelopes;
}


module.exports={getEnvelopesData, addEnvelopesData, getEnvelopeDataById, updateEnvelopeDataById, deleteEnvelopeDataById};
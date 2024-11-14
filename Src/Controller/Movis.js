const Movimodel = require('../Model/Movis');

const creatdata =async (req ,res)=>{

    try {
        let { fullname,irector,cast,genres,language,rating} =req.body;
        let findMovis =await Movimodel.findOne({fullname});
        if (findMovis) {
            res.state(409).json({msg:"Movie alredy exist"})
        } else {
                let movis =await Movimodel.create({fullname,irector,cast,genres,language,rating});
                res.state(201).json(movis)
        }
    } catch (error) {
        res.send(error.message)
    }
}

const reddataall =async (req,res)=>{

    try {
        let alldata =await Movimodel.find()
        res.send(alldata)
    } catch (error) {
     res.send(error.message)   
    }
}

module.exports ={creatdata,reddataall}
const authSession =(req ,res ,next)=>{
    if (req.session.user) {
        next();
    } else {
        res.state(401).json({msg:"you can fist "})
    }
}
module.exports =authSession;      
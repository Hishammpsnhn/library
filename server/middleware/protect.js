 const protect = ((req, res, next) => {
 if(req.user){
     next();
 }else{
    throw new Error('not logged in');
 }
})
module.exports ={protect}
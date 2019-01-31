const router = require('express').Router();
const passport = require('passport');

//google oauth route
 router.get('/google',passport.authenticate('google',{scope:['profile']}));

//google oauth redirect
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
  //res.send(req.user)
  res.redirect('/dashboard');
});

//facebook oauth route
router.use('/facebook',(req,res)=>{
  res.send('logging to facebook')}
);

//twitter oauth router
router.use('/twitter',(req,res)=>{
  res.send('loggint to twitter')}
);



module.exports = router;

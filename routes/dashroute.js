const router = require('express').Router();
 
router.get('/',(req,res) => {
res.send('hi this is your dashboard')
});

module.exports = router;

const express = require('express');
const router = express.Router();
const user_controller = require('./controllers/user_controllers');
const authClientmiddleware = require('../middleware/user_middleware');


router.get('/test' , (req , res) => {
    res.status(200).json({message : 'Test'  , port : process.env.PORT})
});
router.post('/send_otp' , user_controller.send_otp);
router.post('/verify_production' , user_controller.verify_production_user);
router.post('/verify_otp' , user_controller.check_otp);
router.post('/installer_user' , user_controller.installer_user);
router.patch('/update_name/:id' , user_controller.update_name);
router.post('/add_family_member' , authClientmiddleware ,  user_controller.add_family_member);
router.post('/add_production_user' ,  user_controller.add_production_user);
router.patch('/update_production_user/:id' , user_controller.update_production_user);
module.exports = router;

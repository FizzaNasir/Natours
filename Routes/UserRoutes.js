const express=require('express')
const userController=require('./../Controller/userController'); //it contains all the functions

const router=express.Router();
router
.route('/api/v1/users')
.get(userController.getallusers)
.post(userController.createUser)

router
.route('/api/v1/users/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser)
module.exports = router;
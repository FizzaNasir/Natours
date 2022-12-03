const express=require('express')

const getallusers = (req, res)=>{
    res.status(500).json({
        status: 'error',
        message: "This route is not yte defined"
    })
}

const getUser = (req, res)=>{
    res.status(500).json({
        status: 'error',
        message: "This route is not yte defined"
    })
}

const createUser = (req, res)=>{
    res.status(500).json({
        status: 'error',
        message: "This route is not yte defined"
    })
}

const updateUser = (req, res)=>{
    res.status(500).json({
        status: 'error',
        message: "This route is not yte defined"
    })
}

const deleteUser = (req, res)=>{
    res.status(500).json({
        status: 'error',
        message: "This route is not yte defined"
    })
}
const router=express.Router();
router.route('/api/v1/users').get(getallusers).post(createUser)
router.route('/api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser)
module.exports = router;
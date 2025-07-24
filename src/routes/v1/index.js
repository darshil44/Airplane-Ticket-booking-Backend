const express = require('express')
const { infoController } = require('../../controllers')

const router = express.Router()

router.get('/about', infoController.info)
module.exports=router;

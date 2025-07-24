const express = require('express')
const {serverConfig, Logger} = require('./config')
const app = express();

const apiRoutes = require('./routes')

app.use('/api', apiRoutes)

app.listen(serverConfig.PORT, ()=>{
    console.log(`server started sucessfully on : ${serverConfig.PORT}`); 
    Logger.info('successfully started server', {})
})
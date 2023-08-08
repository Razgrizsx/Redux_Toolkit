const configureStore = require("@reduxjs/toolkit").configureStore
const { getDefaultMiddleware } = require("@reduxjs/toolkit")
const cakeReducer = require("../features/cake/cakeSlice")
const icecreamReducer = require("../features/icecream/icecreamSlice")
const userReducer = require("../features/user/userSlice")

//const reduxlogger = require("redux-logger")

//const logger = reduxlogger.createLogger()


const store = configureStore({
    reducer:{
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    
})

module.exports = store
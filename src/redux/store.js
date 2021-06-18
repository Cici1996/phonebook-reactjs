import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from './phoneReducer'

export default configureStore({
    reducer:{
        phone:phoneReducer
    }
})
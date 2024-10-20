import mongoose, {Schema} from "mongoose"
const registerSchema = new Schema({
    fullName:{
        type: String,
        required: true
    }, 
    mobileNo: {
        type: String,
        required: true
    }, 
    birthDay:{
        type: Date, 
        required: true
    }, 
    email:{
        type: String, 
        required: true,
    }, 
    address:{
        type: String, 
        required: true
    }
})
export const Register = mongoose.models.Register ?? mongoose.model("Register", registerSchema)
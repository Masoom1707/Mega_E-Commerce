import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    adressLine:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    state:{
        type:String,
        default:""
    },
    pincode:{
        type:String,
        default:""
    },
    country:String,
    mobile:{
        type:Number,
        default:null
    },
    status:{
        type:Boolean,
        default:true
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'user',
        default:""
    }


}, {timestamps:true})

export const address = mongoose.model('address',addressSchema)
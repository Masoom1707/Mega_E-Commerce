import mongoose from 'mongoose'

const orderSchema  = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    },
    orderId:{
        type:String,
        required: [true, 'orderId']
    },
    productId:{
        type:mongoose.Schema.ObjectId,
        ref:'product'
    },
    productDetails:{
        name:String,
        image:Array
    },
    paymentId:{
        type:String,
        default:""
    },
    paymentStatus:{
        type:String,
        default:""
    },
    defaultAddress:{
        type:mongoose.Schema.ObjectId,
        ref:"address"
    },
    subTotal:{
        type:Number,
        default:0
    },
    TotalAmt:{
        type:Number,
        default:0
    },

}, {timestamps:true})

export const order = mongoose.model('order',orderSchema)

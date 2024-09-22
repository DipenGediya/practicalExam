let mongoose = require("mongoose");

let addCartSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"productSchema"
    },
    qty:{
        type:Number,
        required:true
    }
})

let addCart=mongoose.model("addCartSchema",addCartSchema)

module.exports=addCart
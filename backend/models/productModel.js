const mongoose=require('mongoose');


const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please Enter Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"please Enter Product Description"]
    },
    price:{
        type:Number,
        required:[true,"please Enter Product Price"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"please Enter Product Category"]
    },
    stock:{
        type:Number,
        required:[true,"please Enter Product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
                required:true
            },
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})


module.exports=mongoose.model("Product",productSchema);
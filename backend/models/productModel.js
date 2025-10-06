import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price:{type:Number,required:true},
    image:{type:Array, require:true},
    category: {type:String,required:true},
    subcategory: {type:[String],required:true},
    sizes:{type:Array, required:true},
    discount :{type:Boolean},
    discount_percent:{type:Number,required:true},

})
const productModel = mongoose.models.product || mongoose.model("product",productSchema)
export default productModel
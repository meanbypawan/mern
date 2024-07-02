import { Cart } from "../model/cart.model.js";

export const addToCart = async (request,response,next)=>{
    let {userId,productId} = request.body;
    try{
     let cart = await Cart.findOne({userId});
     if(cart){
        // cart already exist || user second time performing add to cart
        // check product already exist or not
        const status = cart.cartItems.some((item)=>{return item.productId == productId})
        if(status)
            return response.status(200).json({status: false,message: "product is already added into cart"});
        cart.cartItems.push({productId});
        await cart.save();
        return response.status(201).json({status: true, message: "product successfully added into cart"});
     }
     else{
        // Very first time user performing add to cart
        cart = await Cart.create({userId,cartItems:[{productId}]});
        return response.status(201).json({status: true,message: "product successfully added into cart"});
     }
    }
    catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    }
}
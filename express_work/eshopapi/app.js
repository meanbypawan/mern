import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import UserRouter from "./routes/user.routes.js";
import CategoryRouter from "./routes/category.routes.js";
import ProductRouter from "./routes/product.route.js";
import CartRouter from "./routes/cart.routes.js";
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/eshopdb")
.then(()=>{
    app.use("/user",UserRouter);
    app.use("/category",CategoryRouter);
    app.use("/product",ProductRouter);
    app.use("/cart",CartRouter);
    app.listen(3000,()=>{
        console.log("Server Started");
    });
}).catch(err=>{
    console.log(err);
    console.log("Database connection failed..");
})

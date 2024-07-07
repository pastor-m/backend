import mongoose from "mongoose";
import CartsService from "../src/services/carts.service.js";
import {use, expect} from "chai";

const cartsService = new CartsService();

mongoose.connect("mongodb+srv://pastorml09:coderhouse@cluster0.pq1hrhv.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0")

describe("Testing Carts Service", function(){
    
    it("Carts GET should return an object", async function(){
        this.timeout(5000);
        const result = await cartsService.getCart("664ce86d28a2c7631430bf58")
        expect(result).to.be.an('object');
    })

    after(async function(){
        await mongoose.disconnect();
    })

    it("Carts POST should be able to adda a product to the cart list", async function(){
        this.timeout(5000);
    })
})

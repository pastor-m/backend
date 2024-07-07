import mongoose from "mongoose";
import ProductsService from "../src/services/products.service.js";
import assert from "assert"
const productsService = new ProductsService();

mongoose.connect("mongodb+srv://pastorml09:coderhouse@cluster0.pq1hrhv.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0")

//Before
// before(function(){
//     const productsController = new ProductsController();
// })


//Describe

describe("Testing Products Service", function(){


    it("Products GET should return an array", async function(){
        this.timeout(5000)
        const result = await productsService.getProds();
        console.log(typeof(result))
        assert.strictEqual(typeof result === "object",true);
        
    })

    after(async function(){
        await mongoose.disconnect();
    })

    it("Products POST should be able to add a product to the product list", async function(){
        this.timeout(7000)
        let product = {
            title: "Product Test",
            description: "Product description3",
            code: "150",
            price: 34,
            status: true,
            stock: 80,
            thumbnail: "None",
            category: "Test"
        }

        const result = await productsService.addProd(product);

        assert.ok(result._id)
    })

    after(async function(){
        await mongoose.disconnect();
    })


})
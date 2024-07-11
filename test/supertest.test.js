import supertest from "supertest";
import mongoose from "mongoose";
import {use, expect} from "chai";

const request = supertest("http://localhost:8080");

describe("General testing for ecommerce app", () =>{
    describe("Testing users: ", () =>{
        it("Endpoint POST /register should register a user", async () => {
            const userMock = {
                first_name: "Genaro",
                last_name: "Luna",
                age: "36",
                email: "g@l.com",
                cart: [],
                role: "admin"
            }

        

            const {statusCode,ok,_body}= await request.post("/sessions/").send([userMock]);
            console.log(statusCode);
            console.log(ok);
            console.log(_body);

            expect(_body.payload).to.have.property("_id")
        
        })

    })
})
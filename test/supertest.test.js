import supertest from "supertest";
import mongoose from "mongoose";
import {use, expect} from "chai";

const request = supertest("http://localhost:8080");

describe("General testing for ecommerce app", function() {
    
    describe("Testing users: ", () =>{
        
        it("Endpoint POST /register should register a user", async () => {
            
            const userMock = {
                first_name: "Genaro",
                last_name: "Lunas",
                age: "36",
                email: "g@16.com",
                password: "ijkjhsd8",
            }
            this.timeout(5000)
            const {statusCode, ok, _body} =  await request.post("/sessions/").send(userMock);
            console.log(statusCode);
            console.log(ok);
            console.log(_body);

            expect(_body).to.have.property("_id")
        
        })

    })
})
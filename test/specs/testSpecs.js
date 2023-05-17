const loginPage = require("../pageobjects/login.page")

describe("flipkart Login Feature", function(){
    
    it("first test case", function(){
        console.log("First test case completed");
    })

    it("verify login with invalid credentials", async () => {
        browser.url('https://flipkart.com');
        console.log("Second test case completed");
    })
})
const loginPage = require("../pageobjects/login.page")

describe("flipkart Login Feature", function(){
    it("verify login with invalid credentials", async () => {
        browser.url('https://flipkart.com');
        await $("[name='q']").setValue("Dog");
    })
})
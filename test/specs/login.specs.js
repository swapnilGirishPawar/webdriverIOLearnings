const loginPage = require('../pages/login.page');

describe("Demo Tests", function(){

    it("Login Test 1", async () => {
        browser.url("https://the-internet.herokuapp.com/login");

        // POM Approach with single function with all actions.
        await loginPage.login("tomsmith", "SuperSecretPassword!", "You logged into a secure area!");

        // POM Approach with automic function.
        // console.log("Running automic functions");
        // await loginPage.enterUsername("tomsmith");
        // await loginPage.enterPassword("SuperSecretPassword!");
        // await loginPage.clickLoginButton();
        // await loginPage.checkMessage('You logged into a secure area!');
        // console.log("Finished automic functions");

        // Normal Approach
        // await $('#username').setValue("tomsmith");
        // await $('#password').setValue("SuperSecretPassword!");
        // await $('button[type="submit"]').click();
        // await expect($('#flash')).toHaveTextContaining('You logged into a secure area!');
        
        await browser.pause(5000);
    })
})
const homePage = require('../pages/home.Page')

describe('testScenario',  () => { 
    it("invalid credentials",async function(){
        browser.url("https://www.tripadvisor.in/");
        await homePage.clickSignInButton();
        await homePage.enterEmailId("swapnil.pawar@gullak.money");
        await homePage.enterPassword("Swapnil@123");
        await homePage.clickSignInButton();
        await homePage.checkErrorMessage('Either your email or password was incorrect. Please try again or click the "Forgot password?" link below.');
        await browser.pause(10000);
    })

 })

describe("Demo Tests", function(){

    it("Login Test 1", async () => {
        browser.url("https://the-internet.herokuapp.com/login");

        await $('#username').setValue("tomsmith");
        await $('#password').setValue("SuperSecretPassword!");
        await $('button[type="submit"]').click();
        
        await expect($('#flash')).toHaveTextContaining('You logged into a secure area!');
        await browser.pause(5000);
    })
})
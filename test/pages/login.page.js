class loginPage{

    get usernameTextBox(){
        return $('#username');
    }
  
    get passwordTextBox(){
        return $('#password');
    }
    
    get loginButton(){
        return $('button[type="submit"]');
    }
    
    get loginMessage(){
        return $('#flash');
    }
    
    // Single function for all actions.
    async login(username, password, message){
        await this.usernameTextBox.setValue(username);
        await this.passwordTextBox.setValue(password);
        await this.loginButton.click();
        await this.checkMessage(message);
    }

    // Automic functions :- seprate functions for each action.
    async enterUsername(username){
        await this.usernameTextBox.setValue(username);
    }

    async enterPassword(password){
        await this.passwordTextBox.setValue(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
    
    async checkMessage(message){
        await expect(this.loginMessage).toHaveTextContaining(message);
    }
}
module.exports = new loginPage();
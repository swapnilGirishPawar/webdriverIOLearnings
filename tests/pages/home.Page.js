class HomePage{
    // Getter methods
    get signInButton(){
        return $('=Sign in')
    }

    get signInWithEmailButton(){
        return $('=Continue with email')
    }

    get signInWithGoogleButton(){
        return $('#googleBtn')
    }

    get emailTextBox(){
        return $('#regSignIn.email')
    }

    get passwordTextBox(){
        return $('#regSignIn.password')
    }

    get errorMessage(){
        return $('#regErrors')
    }

    // Actions
    async enterEmailId(email){
        await this.emailTextBox().setValue(email);
    }

    async enterPassword(password){
        await this.passwordTextBox().setValue(password);
    }

    async clickSignInButton(){
        await this.signInButton().click();
    }

    async checkErrorMessage(message){
        await expect(this.errorMessage).toHaveTextContaining(message);
    }

}

module.exports = new HomePage();

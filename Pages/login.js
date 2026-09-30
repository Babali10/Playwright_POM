exports.LoginPage = class LoginPage{

    constructor(page){

    this.page=page
    this.username_textbox = page.getByRole('textbox', { name: 'Username' })
    this.password_textbox = page.getByRole('textbox', { name: 'Password' })
    this.login_bbutton = page.getByRole('button', { name: ' Login' })
}


async gotoLoginPage(){
     await this.page.goto('https://the-internet.herokuapp.com/login');
}


async login(username,Password){
await this.username_textbox.fill(username)
await this.password_textbox.fill(Password)
await this.login_bbutton.click();
}

pageTitle(){

}
}
import {
    customClick,
    customFill,
    customHover,
    customWaitForTimeout, exitButton, getNavigation,
    waitForLoadState
} from "../../../utilities/utilities.js";
import { emailAndPasswordWithLogin } from "./selectors/signInSelectors.js";
import {SignInStaticSelectors} from "./selectors/signInStaticSelectors";
export class LoginPage {
    constructor(page) {

        const { emailInput, passwordInput , loginButton} = emailAndPasswordWithLogin(page);
        this.page = page;
        this.emailInput = emailInput;
        this.passwordInput =passwordInput;
        this.loginButton = loginButton;
        this.waitForLoadState= waitForLoadState(page);
        this.navigation = getNavigation(page);
        this.exit =exitButton(page);


    }

    async gotoLoginPage() {
        await this.page.goto(SignInStaticSelectors.appUrl);
        await customWaitForTimeout(2000)
    }

    async gotoEmailandPasswordEntry(emailValue = SignInStaticSelectors.defaultEmail, passwordValue = SignInStaticSelectors.defaultPassword) {
        emailValue = emailValue.toString();
        passwordValue = passwordValue.toString();
        await customClick(this.emailInput , "Click Email Input", this.page);
        await customFill(this.emailInput, emailValue , "Fill Email Field", this.page);
        await customClick(this.passwordInput , "Click Password Field", this.page);
        await customFill(this.passwordInput, passwordValue , "Fill Password Field", this.page);
        await customClick(this.loginButton , "Click Login Button", this.page);
        await this.waitForLoadState
        await customWaitForTimeout(7000);



    }

    async closeBrowser() {
        await customHover(this.navigation);
        await customWaitForTimeout(2000);
        await this.waitForLoadState;
        await customClick(this.exit ,"Click Exit Button" , this.page);

    }


}


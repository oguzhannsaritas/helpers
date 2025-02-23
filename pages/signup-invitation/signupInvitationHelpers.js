import {
    customClick,
    getNavigation,
    waitForLoadState,
    exitButton,
    customFill,
    customWaitForTimeout, customHover, customLocator
} from '../../../utilities/utilities';
require('dotenv').config();
const invitationUrl = process.env.SIGNUP_WITH_INVITATION;
import {
    signupInvitationComplete,
    createYourAccountButton, getStartedButton
} from './selectors/signupInvitationSelector'
import { emailAndPasswordWithLogin } from '../signIn/selectors/signInSelectors.js'
import {LoginPage} from "../signIn/signInHelpers";
import {SignInStaticSelectors} from "../signIn/selectors/signInStaticSelectors";
import {signupStaticSelectors} from "../signup/selectors/signupStaticSelectors";
import {signupInvitationStaticSelectors} from "./selectors/signupInvitationStaticSelectors";




export class signupInvitation extends LoginPage {
    constructor(page) {
        super(page);
        const { emailInput , passwordInput} = emailAndPasswordWithLogin(page);
        const { continueButton , clientName , domainName} = signupInvitationComplete(page);




        this.page = page;
        this.registerEmailInput = emailInput;
        this.createYourAccountButton = createYourAccountButton(page);
        this.getStartedButton = getStartedButton(page);
        this.registerPasswordInput = passwordInput;
        this.clientName = clientName;
        this.domainName =domainName;
        this.continueButton = continueButton;
        this.waitForLoadState = waitForLoadState(page);
        this.navigation = getNavigation(page);
        this.exit =exitButton(page);

    }


    async gotoSignupWithInvitationUrl() {
        await this.page.goto("https://test.heybooster.ai/auth/signup?ref=invitation");
    }


    async enterEmailandPasswordWithInvitation(registerEmailValue = signupStaticSelectors.defaultRegisterEmail, registerPasswordValue = signupStaticSelectors.defaultRegisterPasswordValue) {
        registerEmailValue = registerEmailValue.toString();
        registerPasswordValue = registerPasswordValue.toString();
        await customClick(this.registerEmailInput, "Click Register Email Field", this.page);
        await customFill(this.registerEmailInput, registerEmailValue, "Fill Register Email Field", this.page);
        await customClick(this.registerPasswordInput, "Click Register Password Field", this.page);
        await customFill(this.registerPasswordInput, registerPasswordValue, "Fill Register Password Field", this.page);
        await customClick(this.createYourAccountButton, "Click Create Your Account Button", this.page);
        await this.page.waitForLoadState("networkidle");
        await this.waitForLoadState;

    }


    async gotoLoginPage() {

        await this.page.goto(SignInStaticSelectors.testUrl);

    }


async gotoAddNewClient(clientNameValue = signupInvitationStaticSelectors.defaultClientName , domainNameValue = signupInvitationStaticSelectors.defaultDomainName){
    clientNameValue = clientNameValue.toString();
    domainNameValue = domainNameValue.toString();
    await customClick(this.clientName, "Click Client Name", this.page);
    await customFill(this.clientName, clientNameValue, "Fill Client Name", this.page);
    await customClick(this.domainName, "Click Domain Name", this.page);
    await customFill(this.domainName, domainNameValue, "Fill Domain Name", this.page);
    await customClick(this.continueButton, "Click  Continue Button", this.page);



}




    async closeBrowser() {
        await customHover(this.navigation);
        await customWaitForTimeout(2000);
        await this.waitForLoadState;
        await customClick(this.exit ,"Click Exit Button" , this.page);

    }

}
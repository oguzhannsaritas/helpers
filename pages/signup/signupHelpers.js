import {
    customClick,
    getNavigation,
    waitForLoadState,
    exitButton,
    customFill,
    customWaitForTimeout, customHover, customLocator
} from '../../../utilities/utilities';
require('dotenv').config();

import {
    onboarding,
    signupComplete,
    createYourAccountButton, getStartedButton
} from './selectors/signupSelectors'
import { emailAndPasswordWithLogin } from '../signIn/selectors/signInSelectors.js'
import {signupStaticSelectors} from "./selectors/signupStaticSelectors";
import {LoginPage} from "../signIn/signInHelpers";
import {SignInStaticSelectors} from "../signIn/selectors/signInStaticSelectors";




export class signupInvitation extends LoginPage {
    constructor(page) {
        super(page);
        const { emailInput , passwordInput} = emailAndPasswordWithLogin(page);
        const {
            webSite,
            continueButton,
             companyType , yourRole, IDontHaveAccessToConnectButton ,priorities, connectMetaAds} = signupComplete(page);

        const {
            accountsDropDown,
            accountsOptions,
            facebookEmail,
            facebookPassword,
            reconnectButton,
            facebookLoginButton,
            onboardingConnectFacebook , completeButton, IUnderstandButton, goToTheProductButton} = onboarding(page);


        this.page = page;
        this.registerEmailInput = emailInput;
        this.createYourAccountButton = createYourAccountButton(page);
        this.getStartedButton = getStartedButton(page);
        this.webSite = webSite;
        this.registerPasswordInput = passwordInput;
        this.continueButton = continueButton;
        this.waitForLoadState = waitForLoadState(page);
        this.waitForLoadState = waitForLoadState(page);
        this.connectDataSourceFacebook = onboardingConnectFacebook;
        this.facebookEmail =  facebookEmail;
        this.facebookPassword = facebookPassword;
        this.facebookLogin = facebookLoginButton;
        this.reconnectButton = reconnectButton;
        this.accountsDropDown = accountsDropDown;
        this.accountsOptions = accountsOptions;
        this.navigation = getNavigation(page);
        this.exit =exitButton(page);
        this.companyType =companyType;
        this.yourRole=yourRole;
        this.IDontHaveAccessToConnectButton=IDontHaveAccessToConnectButton;
        this.completeButton=completeButton;
        this.IUnderstandButton=IUnderstandButton;
        this.goToTheProductButton=goToTheProductButton;
        this.priorities=priorities;
        this.connectMetaAds=connectMetaAds;



    }


    async gotoSignupUrl(urlValue) {
        let url;
        switch (urlValue) {
            case 'pmax':
                url = process.env.SIGNUP_WITH_PMAX;
                break;
            case 'premium':
                url = process.env.SIGNUP_WITH_PREMIUM;
                break;
            case 'invitation':
                url = process.env.SIGNUP_WITH_INVITATION;
                break;
            default:
                url = signupStaticSelectors.signupUrl;
        }
        await this.page.goto(url);
    }


    async gotoSignup(registerEmailValue = signupStaticSelectors.defaultRegisterEmail, registerPasswordValue = signupStaticSelectors.defaultRegisterPasswordValue) {
        registerEmailValue = registerEmailValue.toString();
        registerPasswordValue = registerPasswordValue.toString();
        await customClick(this.registerEmailInput, "Click Register Email Field", this.page);
        await customFill(this.registerEmailInput, registerEmailValue, "Fill Register Email Field", this.page);
        await customClick(this.registerPasswordInput, "Click Register Password Field", this.page);
        await customFill(this.registerPasswordInput, registerPasswordValue, "Fill Register Password Field", this.page);
        await customClick(this.createYourAccountButton, "Click Get Started Button", this.page);
        await this.waitForLoadState;

    }

    async gotoLoginPage() {
        await this.page.goto(SignInStaticSelectors.testUrl);
    }

    async gotoOnboardingBusinessOverview( webSiteValue = signupStaticSelectors.defaultWebSiteValue ,companyTypeValue = signupStaticSelectors.companyTypeValue, businessValue = signupStaticSelectors.defaultBusinessValue, roleValue = signupStaticSelectors.defaultRoleValue ) {
            webSiteValue = webSiteValue.toString();
            companyTypeValue = companyTypeValue.toString();
            roleValue = roleValue.toString();

            await customClick(this.getStartedButton, "Click Get Started Button", this.page);
            await customClick(this.companyType, "Click Company Type Field", this.page);
            await customClick(customLocator(this.page,"li").filter({ hasText: companyTypeValue }), `Click Select Country: ${companyTypeValue}`, this.page);
            await customClick(this.yourRole, "Click Your Role Field", this.page);
            await customClick(customLocator(this.page,"li").filter({ hasText: roleValue }), `Click Select Role: ${roleValue}`, this.page);
            await customClick(this.webSite, "Click Web Site", this.page);
            await customFill(this.webSite, webSiteValue, "Fill Web Site", this.page);
            await customClick(this.continueButton, "Click  Continue Button", this.page);
            await this.page.waitForLoadState("networkidle");
            await this.waitForLoadState;


    }

async gotoSelectedDatasource(){
    await customClick(this.connectDataSourceFacebook , "Click Connect Facebook Button" , this.page);
    await customClick(this.continueButton, "Click  Continue Button", this.page);
}

async gotoSelectedPriorities() {
    await customClick(this.priorities, "Click Marketing Budget Allocation", this.page);
    await customClick(this.continueButton, "Click  Continue Button", this.page);
}
    async gotoOnboardingIntegration( facebookEmailValue = signupStaticSelectors.defaultFacebookEmailValue, facebookPasswordValue = signupStaticSelectors.defaultFacebookPasswordValue) {
        facebookEmailValue = facebookEmailValue.toString();


        await customClick(this.connectMetaAds, "Click Connect Meta Ads", this.page);
        facebookPasswordValue = facebookPasswordValue.toString();
        await this.waitForLoadState;
        await customClick(this.facebookEmail ,"Click Facebook Email Field" , this.page);
        await customFill(this.facebookEmail ,facebookEmailValue , "Fill Facebook Email Field" , this.page);
        await customClick(this.facebookPassword ,"Click Facebook Password Field" , this.page);
        await customFill(this.facebookPassword , facebookPasswordValue , "Fill Facebook Password Field" , this.page);
        await customClick(this.facebookLogin ,"Click Facebook Login Button" , this.page);
        await this.waitForLoadState;
        await customClick(this.reconnectButton ,"Click Reconnect Button" , this.page);
        await this.waitForLoadState;
        await customClick(this.accountsDropDown ,"Click Accounts Button" , this.page);
        await customClick(this.accountsOptions ,"Click Accounts Options" , this.page);
        await customClick(this.completeButton,"Click Complete Button" , this.page);
        await this.waitForLoadState;


    }

    async gotoOnboardingBookingCalendar (){
        await customClick(this.IUnderstandButton,"Click I Understand Button" , this.page);
        await customClick(this.goToTheProductButton,"Click Go To The Product Button" , this.page);
        await this.waitForLoadState;
        await customWaitForTimeout(6500)
        await this.page.screenshot({ path: 'screen-shots/afterRegistrationPanel.png' });
    }

    async closeBrowser() {
        await customHover(this.navigation);
        await customWaitForTimeout(2000);
        await this.waitForLoadState;
        await customClick(this.exit ,"Click Exit Button" , this.page);

    }

}
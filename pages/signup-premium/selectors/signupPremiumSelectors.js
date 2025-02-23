import {customByRole, customByText, customPlaceholder} from "../../../../utilities/utilities";
import {signupStaticSelectors} from "../../signup/selectors/signupStaticSelectors";

export function onboardingPremium(page){

    const onboardingConnectGoogleAnalytics = page.getByRole('link', { name: signupStaticSelectors.dataSourceGoogleAnalytics});
    const onboardingConnectFacebook = customByText(page , signupStaticSelectors.dataSourceFacebook )
    const facebookEmail = customPlaceholder(page ,signupStaticSelectors.facebookEmailInput);
    const facebookPassword = customPlaceholder(page ,signupStaticSelectors.facebookPasswordInput);
    const facebookLoginButton = customByRole(page ,'button', { name: signupStaticSelectors.facebookLoginButton });
    const reconnectButton = customByRole(page ,'button', { name: signupStaticSelectors.reconnectButton });
    const accountsDropDown = customByText(page, signupStaticSelectors.accounts );
    const accountsOptions = customByText(page , signupStaticSelectors.accountsOptions ).first();
    const completeButton = customByRole(page ,'button', { name: signupStaticSelectors.complete });
    const IUnderstandButton = customByRole(page.frameLocator('#app iframe'), 'button', { name: signupStaticSelectors.IUnderstandButton });
    const goToTheProductButton = customByRole(page ,'button', { name: signupStaticSelectors.goToTheProductButton });

    return {goToTheProductButton, completeButton,  IUnderstandButton,facebookEmail, facebookPassword, facebookLoginButton, reconnectButton, accountsDropDown, accountsOptions,onboardingConnectFacebook, onboardingConnectGoogleAnalytics };

}

export function signupPremiumComplete(page){
    const webSite =  customPlaceholder(page ,signupStaticSelectors.webSite);
    const companyType = customByText(page,signupStaticSelectors.companyTypeInput);
    const yourRole = customByText(page,signupStaticSelectors.yourRoleInput);
    const continueButton = customByRole(page,'button', { name: signupStaticSelectors.continueButton });
    const priorities=customByText(page, signupStaticSelectors.prioritiesDefaultValue);
    const IDontHaveAccessToConnectButton = customByRole(page, 'button', { name: signupStaticSelectors.IDontHaveAccessToConnectButton });
    const connectMetaAds = customByRole(page, 'button', { name: signupStaticSelectors.ConnectMetaAds });


    return { webSite,  continueButton , companyType, yourRole, IDontHaveAccessToConnectButton, priorities, connectMetaAds};
}

export function createYourAccountButton(page){

    return  customByRole(page, 'button', { name: signupStaticSelectors.createYourAccountButton });
}
export function getStartedButton(page){

    return  customByRole(page, 'button', { name: signupStaticSelectors.getStartedButton });
}



import {customByRole, customPlaceholder} from "../../../../utilities/utilities";
import {signupStaticSelectors} from "../../signup/selectors/signupStaticSelectors";
import {signupInvitationStaticSelectors} from "./signupInvitationStaticSelectors";

export function signupInvitationComplete(page){
    const clientName =  customPlaceholder(page ,signupInvitationStaticSelectors.clientName);
    const domainName =  customPlaceholder(page ,signupInvitationStaticSelectors.domainName);
    const continueButton = customByRole(page,'button', { name: signupStaticSelectors.continueButton })

    return { clientName,  continueButton , domainName};
}

export function createYourAccountButton(page){

    return  customByRole(page, 'button', { name: signupStaticSelectors.createYourAccountButton });
}

export function getStartedButton(page){

    return  customByRole(page, 'button', { name: signupStaticSelectors.getStartedButton });
}



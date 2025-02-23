import { SignInStaticSelectors } from "./signInStaticSelectors";
import {customByRole, customLocator} from "../../../../utilities/utilities";

export function emailAndPasswordWithLogin(page) {
    const emailInput = customLocator(page,SignInStaticSelectors.emailInput).first()
    const passwordInput = customLocator(page,SignInStaticSelectors.passwordInput)
    const loginButton = customLocator(page,SignInStaticSelectors.loginButton);

    return { emailInput, passwordInput, loginButton };
}

export function signInWithGoogle(page){

    return customByRole(page,'button', { name: SignInStaticSelectors.signInWithGoogle });
}
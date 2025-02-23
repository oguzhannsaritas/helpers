import { customByRole, customByText, customLocator, customPlaceholder } from "../../../../../utilities/utilities";
import { SignInStaticSelectors } from "../../../signIn/selectors/signInStaticSelectors";
import { teammateStaticSelectors} from "./teammateStaticSelector";


export function teammateSelectors(page) {
    const setting = customByRole(page, SignInStaticSelectors.navigationSideBar).locator('div').filter({hasText: SignInStaticSelectors.exitButton}).getByRole('link').nth(4);
    const newTeammateButton = customByRole(page, 'button', {name: teammateStaticSelectors.newTeammateButton});
    const writeYourTeammateEmail = customPlaceholder(page, teammateStaticSelectors.teammateEmail);
    const relatedClientDropDown = customLocator(page, 'div.flex.items-center.flex-1.gap-1\\.5').nth(1);
    const roleDropDown = customLocator(page, 'div.flex.items-center.flex-1.gap-1\\.5').nth(2);
    const addTeammateButton = customByRole(page, 'button', {name: teammateStaticSelectors.addTeammateButton, exact: true});
    const close = page.mouse.wheel(0, 100);
    const closeButton = customByRole(page, SignInStaticSelectors.navigationSideBar).locator('div').filter({hasText: SignInStaticSelectors.exitButton}).getByRole('link').nth(3);
    const menu = customByRole(page,'img', { name: teammateStaticSelectors.menuIcon }).nth(1);
    const remove = customByText(page, teammateStaticSelectors.removeTeammate);
    const removeTheTeammateButton = customByRole(page,'button', { name: teammateStaticSelectors.removeTeammateButton });



    return {removeTheTeammateButton,remove,menu,setting, newTeammateButton, writeYourTeammateEmail, relatedClientDropDown,  roleDropDown,  addTeammateButton, close, closeButton}

}


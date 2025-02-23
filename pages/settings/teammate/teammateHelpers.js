import {
    customClick,
    customFill,
    customHover,
    getNavigation,
    waitForLoadState
} from "../../../../utilities/utilities";
import {teammateSelectors} from "./selectors/teammateSelectors";
import {LoginPage} from "../../signIn/signInHelpers";
import {teammateStaticSelectors} from "./selectors/teammateStaticSelector";

export class teammateHelpers extends LoginPage {
    constructor(page) {
        super(page);
        const {removeTheTeammateButton,remove,menu,setting, newTeammateButton, writeYourTeammateEmail, relatedClientDropDown,  roleDropDown, addTeammateButton, closeButton }=teammateSelectors(page)
        this.page=page;
        this.navigation = getNavigation(page);
        this.setting= setting;
        this.newTeammateButton = newTeammateButton;
        this.writeYourTeammateEmail= writeYourTeammateEmail;
        this.relatedClientDropDown = relatedClientDropDown;
        this.roleDropDown = roleDropDown;
        this.addTeammateButton = addTeammateButton;
        this.waitForLoadState = waitForLoadState(page);
        this.closeButton = closeButton;
        this.menu = menu;
        this.remove = remove;
        this.removeTheTeammateButton = removeTheTeammateButton;

    }
    async gotoAddNewTeammate(){
            await customHover(this.navigation, 'Clicking navigation', this.page);
            await this.waitForLoadState;
            await customClick(this.setting, 'Clicking setting', this.page);

    }
    async gotoAddTeammate(teammateEmailValue = teammateStaticSelectors.defaultTeammateEmailValue, relatedClientValue = teammateStaticSelectors.defaultRelatedClientValue, roleValue = teammateStaticSelectors.defaultRoleValue) {
        teammateEmailValue=teammateEmailValue.toString();
        relatedClientValue=relatedClientValue.toString();
        roleValue=roleValue.toString();
        await customClick(this.newTeammateButton, 'Clicking new teammate button', this.page);
        await customClick(this.writeYourTeammateEmail, 'Clicking write your teammate email', this.page);
        await customFill(this.writeYourTeammateEmail, teammateEmailValue, 'Filling teammate email', this.page);
        await customClick(this.relatedClientDropDown, 'Clicking related client', this.page);
        await customClick(this.page.locator('form').getByText(relatedClientValue), 'Selecting related client', this.page);
        await customClick(this.roleDropDown, 'Clicking role', this.page);
        await customClick(this.page.getByText(roleValue, { exact: true }), 'Selecting role', this.page);
        await this.waitForLoadState;
        await customClick(this.addTeammateButton, 'Clicking add teammate button', this.page);
        await this.waitForLoadState;
    }
    async gotoRemoveTeammate(){
            await customHover(this.navigation, 'Clicking navigation', this.page);
            await customClick(this.setting, 'Clicking setting', this.page);
            await this.waitForLoadState;
            await customClick(this.menu, 'Clicking menu', this.page);
            await customClick(this.remove, 'Clicking remove', this.page);
            await customClick(this.removeTheTeammateButton, 'Clicking remove the teammate button', this.page);
            await this.waitForLoadState;


    }
    async closePage() {
        await customHover(this.navigation, 'Clicking navigation again', this.page);
        await this.waitForLoadState;
        await customClick(this.closeButton, 'Clicking close button', this.page);

    }

}


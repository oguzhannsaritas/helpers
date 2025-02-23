import {customByRole, customLocator} from "../../../../utilities/utilities";
import {runPackageStaticSelector} from "./runPackageStaticSelector";


export function runReportSelector(page){

    const activateNowButton = customLocator(page, runPackageStaticSelector.activateNowButton, {isText: true});
    const share = customByRole(page, 'button', { name: runPackageStaticSelector.share });
    const copyButton = customByRole(page, 'button',{name:runPackageStaticSelector.copyButton} );

    return {
        copyButton,
        share,
        activateNowButton
    }
}

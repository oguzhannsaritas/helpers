import {customByRole, customLocator} from "../../../../utilities/utilities";
import {runPackageStaticSelector} from "./runPackageStaticSelector";

export function runPackageSelector(page){


    const activateButton = customByRole(page, 'button', { name: runPackageStaticSelector.activateButton });
    const share = customByRole(page, 'button', { name: runPackageStaticSelector.share });
    const copyButton = customByRole(page, 'button',{name:runPackageStaticSelector.copyButton} );

    return {
        activateButton,
        copyButton,
        share,

    }
}


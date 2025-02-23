import {LoginPage} from "../signIn/signInHelpers";
import {
    customClick, customLocator,
    customWaitForTimeout,
    getNavigation,
    waitForLoadState
} from "../../../utilities/utilities";
import {runPackageSelector} from "./selectors/runPackageSelector";


export class runPackages extends LoginPage {
    constructor(page) {
        super(page);
        const {copyButton,  share, activateButton,  }  = runPackageSelector(page);
        this.page = page;
        this.navigation = getNavigation(page);
        this.activateButton = activateButton;
        this.share = share
        this.copyButton=copyButton;
        this.waitForLoadState = waitForLoadState(page);
    }






    getPackageLocator(page, packageName) {
        return customLocator(page, `[data-test-id="${packageName}"]`, {isText: false});
    }

    async gotoRunPackages(packageName = "Organic Landing Page Performance") {
        const locator = this.getPackageLocator(this.page, packageName);

        await customClick(locator, `Click ${packageName}`, this.page);

        await this.waitForLoadState;
        await customWaitForTimeout(4000);

        return this;
    }


    async gotoPackageActivateButton(){
        await customClick(this.activateButton, "Click Active Button", this.page);
    }




    getPackageInReportLocator(page, reportName) {
        return page.locator(`text="${reportName}"`);
    }

    async gotoPackageInReport(reportName = "Organic Landing Page Performance") {
        const locator = this.getPackageInReportLocator(this.page, reportName);

        await customClick(locator, `Click ${reportName}`, this.page);


        await this.waitForLoadState;
        await customWaitForTimeout(4000);

        return this;
    }

    getPackageInReportInsightLocator(page, reportName) {
        return page.locator(`text="${reportName}"`);
    }


    async gotoReportInInsight(insightName = "Organic Landing Page Performance") {
        const locator = this.getPackageInReportInsightLocator(this.page, insightName);

        await customClick(locator, `Click ${insightName}`, this.page);

        await this.waitForLoadState;
        await customWaitForTimeout(4000);
    }



    async gotoPackageShareInsight() {

        await customClick(this.share, "Click Share", this.page);


        await customClick(this.copyButton, "Click Copy Button", this.page);

        await this.page.waitForTimeout(1000);

        const copiedURL = await this.page.evaluate(async () => {
            return await navigator.clipboard.readText();
        });

        console.log("Copied url : ", copiedURL);

        const newPage = await this.page.context().newPage();
        await newPage.goto(copiedURL, { waitUntil: 'load' });
    }


}


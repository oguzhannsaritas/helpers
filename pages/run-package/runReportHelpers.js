import {LoginPage} from "../signIn/signInHelpers";
import {
    customClick, customLocator,
    customWaitForTimeout,
    getNavigation,
    waitForLoadState
} from "../../../utilities/utilities";
import { runReportSelector} from "./selectors/runReportSelector";


export class runReport extends LoginPage {
    constructor(page) {
        super(page);
        const {activateNowButton , share, copyButton} = runReportSelector(page);
        this.activateNowButton = activateNowButton;
        this.page = page;
        this.navigation = getNavigation(page);
        this.share = share
        this.copyButton=copyButton;
        this.waitForLoadState = waitForLoadState(page);
    }






    getReportLocator(page, reportName) {
        return customLocator(page, `[data-test-id="${reportName}"]`, {isText: false});
    }

    async gotoRunReport(reportName = "Organic Landing Page Performance") {
        const locator = this.getReportLocator(this.page, reportName);

        await customClick(locator, `Click ${reportName}`, this.page);

        await this.waitForLoadState;
        await customWaitForTimeout(4000);

        return this;
    }




    async gotoReportActivateButton(){
        await customClick(this.activateNowButton, "Click Active Button", this.page);
    }


    getInsightLocator(page, insightName) {
        return page.locator(`text="${insightName}"`);
    }

    async gotoInsight(insightName = "Organic Landing Page Performance") {
        const locator = this.getInsightLocator(this.page, insightName);

        await customClick(locator, `Click ${insightName}`, this.page);


        await this.waitForLoadState;
        await customWaitForTimeout(4000);

        return this;
    }




    async gotoShareInsight() {
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


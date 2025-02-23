import { kpiSelectors } from "./selectors/kpiSelector";
import {
    getNavigation,
    customClick,
    customFill,
    waitForLoadState,
    customHover,
    customByRole
} from "../../../utilities/utilities";
import { LoginPage } from "../signIn/signInHelpers";
import {kpiStaticSelectors} from "./selectors/kpiStaticSelector";

export class KPIHelpers extends LoginPage {
    async customClickHandler(source, metric, selectors) {
        for (const selector of selectors) {
            await customClick(this[source][selector], `Click ${selector}`, this.page);
        }
    }

    constructor(page) {
        super(page);
        const { googleAnalytics, googleAnalytics4, goalTracking, createNewKpiButton, addYourGoalsMultiSelect,
             selectTags, tagPlaceholder, addFilter, filterDropDown,operatorDropDown , writeYourValue,googleADS,
            enterYourTarget, createKpiButton, goToResult, kpiCardMenu, remove, removeKpiButton, close , facebook, googleSearchConsole} = kpiSelectors(page);
        this.page = page;
        this.goalTracking = goalTracking;
        this.createNewKPI = createNewKpiButton;
        this.addYourGoalsMultiSelectDropDown = addYourGoalsMultiSelect;
        this.selectTags = selectTags;
        this.tagPlaceholder = tagPlaceholder;
        this.addFilterButton = addFilter;
        this.filterDropDown = filterDropDown;
        this.operatorDropDown = operatorDropDown;
        this.writeYourValue = writeYourValue;
        this.enterYourTarget = enterYourTarget;
        this.createKpiButton = createKpiButton;
        this.goToResult = goToResult;
        this.kpiCardMenu = kpiCardMenu;
        this.remove = remove;
        this.removeKpiButton = removeKpiButton;
        this.close = close;
        this.googleSearchConsole = googleSearchConsole;
        this.googleADS = googleADS;
        this.facebook = facebook;
        this.googleAnalytics4 = googleAnalytics4;
        this.googleAnalytics = googleAnalytics;

        this.waitForLoadState = waitForLoadState(page);
        this.waitForTimeout = async () => await page.waitForTimeout(3000);
        this.navigation = getNavigation(page);
    }


    async gotoOpenKpiPage(){
        await customHover(this.navigation, "Go to Navigation", this.page);
        await customClick(this.goalTracking, "Click Goal Tracking", this.page);
        await this.waitForLoadState;
    }
    async gotoCreateNewKPIButton(){
        await customClick(this.createNewKPI, "Click Create New KPI Button", this.page);
        await this.waitForLoadState;
    }
    async gotoAddYourGoalsDropDown(){
        await customClick(this.addYourGoalsMultiSelectDropDown, "Click Add Your Goals Multi Select", this.page);
    }
    async gotoDataSourceGoals(dataSource = kpiStaticSelectors.defaultDataSource){
        switch (dataSource) {
            case 'googleSearchConsole':
                await customClick(this.googleSearchConsole.dataSourceGoogleSearchConsole, "Click Data Source Google Search Console", this.page);
                break;
            case 'googleADS':
                await customClick(this.googleADS.dataSourceGoogleADS, "Click Data Source Google Ads", this.page);
                break;
            case 'facebook':
                await customClick(this.facebook.dataSourceFacebook, "Click Data Source Facebook", this.page);
                break;
            case 'googleAnalytics':
                await customClick(this.googleAnalytics.dataSourceGoogleAnalytics, "Click Data Source Google Analytics", this.page);
                break;
            case 'googleAnalytics4':
                await customClick(this.googleAnalytics4.dataSourceGoogleAnalytics4, "Click Data Source Google Analytics 4", this.page);
                break;
            default:
                throw new Error(`Unknown data source: ${dataSource}`);
        }

        return this;
    }
    async gotoGoals(dataSource= kpiStaticSelectors.defaultDataSource, goal= kpiStaticSelectors.defaultGoal ) {
        const selectGoals = {
            googleSearchConsole: {
                searchConsoleImpression: ['selectSearchConsoleImpression', 'selectSearchConsoleImpressionAdd'],
                searchConsoleClicks: ['selectSearchConsoleClicks', 'selectSearchConsoleClicksAdd'],
                lastMonthOrganicClick: ['selectLastMonthOrganicClick', 'selectLastMonthOrganicClickAdd'],
                lastMonthOrganicImpressions: ['selectLastMonthOrganicImpressions', 'selectLastMonthOrganicImpressionsAdd'],
                lastMonthSessions: ['selectLastMonthSessions', 'selectLastMonthSessionsAdd'],
                selectOrganicCtr: ['selectOrganicCtr', 'selectOrganicCtrAdd'],
            },
            googleADS: {
                googleADSCtr: ['selectGoogleAdsCtr', 'selectGoogleAdsCtrAdd'],
                googleADSCpc: ['selectGoogleAdsCpc', 'selectGoogleAdsCpcAdd'],
                googleAdsConversion: ['selectGoogleAdsConversion', 'selectGoogleAdsConversionAdd'],
                KPIMonthlyTargetAdsROAS: ['selectKPIMonthlyTargetAdsROAS', 'selectKPIMonthlyTargetAdsROASAdd'],
                googleAdsBudget: ['selectGoogleAdsBudget', 'selectGoogleAdsBudgetAdd'],
                googleAdsImpressions: ['selectGoogleAdsImpressions', 'selectGoogleAdsImpressionsAdd'],
                adsCostPerConversion: ['selectAdsCostPerConversion', 'selectAdsCostPerConversionAdd'],
                TROAS: ['selectTROAS', 'selectTROASAdd'],
                paidROAS: ['selectPaidROAS', 'selectPaidROASAdd'],
            },
            facebook: {
                facebookReach: ['selectFacebookReach', 'selectFacebookReachAdd'],
                facebookCPM : ['selectFacebookCPM', 'selectFacebookCPMAdd'],
                facebookCost : ['selectFacebookCost', 'selectFacebookCostAdd' ],
                facebookImpressions : ['selectFacebookImpressions', 'selectFacebookImpressionsAdd' ],
                facebookCPC : ['selectFacebookCPC', 'selectFacebookCPCAdd' ],
                facebookFrequency : ['selectFacebookFrequency', 'selectFacebookFrequencyAdd' ],
                facebookCTR : ['selectFacebookCTR', 'selectFacebookCTRAdd' ],
                facebookClicks : ['selectFacebookClicks', 'selectFacebookClicksAdd' ],
                TROAS : ['selectTROAS', 'selectTROASAdd' ],
                facebookROAS : ['selectFacebookROAS', 'selectFacebookROASAdd' ],
                GA4FacebookWebROAS : ['selectGA4FacebookWebROAS', 'selectGA4FacebookWebROASAdd' ],
                paidROAS: ['selectPaidROAS', 'selectPaidROASAdd' ],

            },
            googleAnalytics: {
                analyticsSession : ['selectAnalyticsSession', 'selectAnalyticsSessionAdd' ],
                analyticsNewUsers : ['selectAnalyticsNewUsers', 'selectAnalyticsNewUsersAdd' ],
                analyticsGoalCompletion : ['selectAnalyticsGoalCompletion', 'selectAnalyticsGoalCompletionAdd' ],
                analyticsRevenue : ['selectAnalyticsRevenue', 'selectAnalyticsRevenueAdd' ],
                analyticsEcommerce : ['selectAnalyticsEcommerce', 'selectAnalyticsEcommerceAdd' ],
                analyticsUser : ['selectAnalyticsUser', 'selectAnalyticsUserAdd' ],
                googleAdsROAS : ['selectGoogleAdsROAS', 'selectGoogleAdsROASAdd' ],
                analyticsTransactions : ['selectAnalyticsTransactions', 'selectAnalyticsTransactionsAdd' ],
                analyticsBounceRate : ['selectAnalyticsBounceRate', 'selectAnalyticsBounceRateAdd' ],
                lastMonthSessions : ['selectLastMonthSessions', 'selectLastMonthSessionsAdd' ],
                avgPageLoadTime : ['selectAvgPageLoadTime', 'selectAvgPageLoadTimeAdd' ],
                allGoalConversionCompletion : ['selectAllGoalConversionCompletion', 'selectAllGoalConversionCompletionAdd' ],
                analyticsNewUserRate : ['selectAnalyticsNewUserRate', 'selectAnalyticsNewUserRateAdd' ],
                allGoalConversionRate : ['selectAllGoalConversionRate', 'selectAllGoalConversionRateAdd' ],
                goalConversionRate : ['selectGoalConversionRate', 'selectGoalConversionRateAdd' ],
                analyticsROAS : ['selectAnalyticsROAS', 'selectAnalyticsROASAdd' ],
                TROAS : ['selectTROAS', 'selectTROASAdd' ],
                facebookROAS : ['selectFacebookROAS', 'selectFacebookROASAdd' ],
            },
            googleAnalytics4: {
                totalRevenue: ['selectTotalRevenue', 'selectTotalRevenueAdd'],
                adsROAS: ['selectAdsROAS', 'selectAdsROASAdd'],
                GA4FacebookROAS: ['selectGA4FacebookROAS', 'selectGA4FacebookROASAdd'],
                paidROAS: ['selectPaidROAS', 'selectPaidROASAdd'],
                sessions: ['selectSessions', 'selectSessionsAdd'],
                conversionRate: ['selectConversionRate', 'selectConversionRateAdd'],

            }
        };
        if (selectGoals[dataSource] && selectGoals[dataSource][goal]) {
            await this.customClickHandler(dataSource, goal, selectGoals[dataSource][goal]);
        } else {
            throw new Error(`Unknown source or goal: ${dataSource}, ${goal}`);
        }

        return this;

    }
    async gotoTags(value = 'KPI OLUSTURMA DEFAULT TAG') {
        value = value.toString();
        await customClick(this.selectTags, "Click Tags", this.page);
        await customClick(this.tagPlaceholder, "Click Tag Placeholder", this.page);
        await customFill(this.tagPlaceholder, value, "Fill Tag Placeholder", this.page);
        await this.tagPlaceholder.press('Enter');
    }

    async gotoAddFilter(selectFilter = 'page', selectOperator = 'NOT CONTAINING' ){

        await customClick(this.addFilterButton, "Click Add Filter", this.page);
        await customClick(this.filterDropDown, "Click Select Filter", this.page);
        await customClick(customByRole(this.page, 'option', { name: selectFilter}), `Click Select Query: ${selectFilter}`, this.page);
        await customClick(this.operatorDropDown, "Click Select Operator", this.page);
        await customClick(customByRole(this.page, 'option', { name: selectOperator, exact: true }), `Click Select Containing: ${selectOperator}`, this.page);

    }




    async gotoFillWriteYourValue(value = 333333){
        value = value.toString();
        await customClick(this.writeYourValue, "Click Write Your Value", this.page);
        await customFill(this.writeYourValue,value, "Fill Write Your Value", this.page);
    }
    async gotoFillEnterYourTarget(targetValue = 4444444){
        targetValue = targetValue.toString();
        await customClick(this.enterYourTarget, "Click Enter Your Target", this.page);
        await customFill(this.enterYourTarget, targetValue, "Fill Enter Your Target", this.page);
    }
    async gotoCreateKPIButton(){
        await customClick(this.createKpiButton, "Click Create KPI Button", this.page);
        await this.waitForTimeout();
        await this.waitForLoadState;
    }
    async gotoResult(){
        await customClick(this.goToResult, "Click Go to Result", this.page);
        await this.waitForLoadState;
        await this.waitForTimeout();


    }
    async gotoRemoveKPI(){
        await customHover(this.navigation, "Go to Navigation", this.page);
        await customClick(this.goalTracking, "Click Goal Tracking", this.page);
        await customClick(this.kpiCardMenu, "Click KPI Card Menu", this.page);
        await customClick(this.remove, "Click Remove", this.page);
        await customClick(this.removeKpiButton, "Click Remove KPI Button", this.page);
        await this.waitForLoadState;
    }


    async gotoCloseKPIPage(){
        await customHover(this.navigation, "Go to Navigation", this.page);
        await customClick(this.close, "Click Close", this.page);
    }



}

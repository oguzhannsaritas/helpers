import { SignInStaticSelectors } from "../../signIn/selectors/signInStaticSelectors";
import { customByRole, customByText, customLocator, customPlaceholder } from "../../../../utilities/utilities";
import { kpiStaticSelectors } from "./kpiStaticSelector";

export function kpiSelectors(page) {
        const goalTracking = customByRole(page, 'link', { name: kpiStaticSelectors.goalTracking });
        const createNewKpiButton = customLocator(page, kpiStaticSelectors.createNewKpiButton);
        const addYourGoalsMultiSelect = customLocator(page, kpiStaticSelectors.addYourGoalsDropDown);
        const selectTags = customByText(page, kpiStaticSelectors.selectTags, { exact: true });
        const tagPlaceholder = customPlaceholder(page, kpiStaticSelectors.tagPlaceholder);
        const addFilter = customByText(page, kpiStaticSelectors.addFilter);
        const filterDropDown = customLocator(page, kpiStaticSelectors.filterDropDown).getByRole('img', { name: kpiStaticSelectors.dropdownIndicatorKPI });
        const operatorDropDown = customLocator(page, kpiStaticSelectors.operatorDropDown).getByRole('img', { name: kpiStaticSelectors.dropdownIndicatorKPI });
        const writeYourValue = customPlaceholder(page, kpiStaticSelectors.writeYourValue);
        const enterYourTarget = customPlaceholder(page, kpiStaticSelectors.enterYourTarget);
        const createKpiButton = customByRole(page, 'button', { name: kpiStaticSelectors.createKpiButton });
        const goToResult = customByRole(page, 'button', { name: kpiStaticSelectors.goToResult });
        const kpiCardMenu = customLocator(page, kpiStaticSelectors.kpiCardMenu);
        const remove = customByText(page, kpiStaticSelectors.kpiCardMenuRemove);
        const removeKpiButton = customByRole(page, 'button', { name: kpiStaticSelectors.removeKpiButton });
        const close = customByRole(page, SignInStaticSelectors.navigationSideBar).locator('div').filter({ hasText: SignInStaticSelectors.exitButton }).getByRole('link').nth(3);

        const googleSearchConsole ={
                 dataSourceGoogleSearchConsole : customByRole(page, 'option', { name: kpiStaticSelectors.options.googleSearchConsole.main }).locator('div').nth(1),
                 selectSearchConsoleImpression : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleSearchConsole.selectSearchConsoleImpression }),
                 selectSearchConsoleImpressionAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleSearchConsole.selectSearchConsoleImpressionAdd }).locator('span').nth(1),
                selectSearchConsoleClicks : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleSearchConsole.selectSearchConsoleClicks }),
                selectSearchConsoleClicksAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleSearchConsole.selectSearchConsoleClicksAdd }).locator('span').nth(1),
                selectLastMonthOrganicClick : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleSearchConsole.selectLastMonthOrganicClick }),
                selectLastMonthOrganicClickAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleSearchConsole.selectLastMonthOrganicClickAdd }).locator('span').nth(1),
                selectLastMonthOrganicImpressions : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleSearchConsole.selectLastMonthOrganicImpressions }),
                selectLastMonthOrganicImpressionsAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleSearchConsole.selectLastMonthOrganicImpressionsAdd }).locator('span').nth(1),
                selectLastMonthSessions : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleSearchConsole.selectLastMonthSessions }),
                selectLastMonthSessionsAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleSearchConsole.selectLastMonthSessionsAdd }).locator('span').nth(1),
                selectOrganicCtr : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleSearchConsole.selectOrganicCtr }),
                selectOrganicCtrAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleSearchConsole.selectOrganicCtrAdd }).locator('span').nth(1),
        }

        const googleADS = {
                dataSourceGoogleADS : customByRole(page, 'option', { name: kpiStaticSelectors.options.googleAds.main }).locator('div').nth(1),
                selectGoogleAdsCtr : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAds.selectGoogleAdsCtr }),
                selectGoogleAdsCtrAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAds.selectGoogleAdsCtrAdd }).locator('span').nth(1),
                selectGoogleAdsCpc : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAds.selectGoogleAdsCpc }),
                selectGoogleAdsCpcAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAds.selectGoogleAdsCpcAdd }).locator('span').nth(1),
                selectGoogleAdsConversion : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAds.selectGoogleAdsConversion }),
                selectGoogleAdsConversionAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAds.selectGoogleAdsConversionAdd }).locator('span').nth(1),
                selectKPIMonthlyTargetAdsROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAds.selectKPIMonthlyTargetAdsROAS }),
                selectKPIMonthlyTargetAdsROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAds.selectKPIMonthlyTargetAdsROASAdd }).locator('span').nth(1),
                selectGoogleAdsBudget : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAds.selectGoogleAdsBudget }),
                selectGoogleAdsBudgetAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAds.selectGoogleAdsBudgetAdd }).locator('span').nth(1),
                selectGoogleAdsImpressions : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAds.selectGoogleAdsBudget }),
                selectGoogleAdsImpressionsAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAds.selectGoogleAdsImpressionsAdd }).locator('span').nth(1),
                selectAdsCostPerConversion : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAds.selectAdsCostPerConversion }),
                selectAdsCostPerConversionAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAds.selectGoogleAdsImpressionsAdd }).locator('span').nth(1),
                selectTROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAds.selectTROAS }),
                selectTROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAds.selectTROASAdd }).locator('span').nth(1),
                selectPaidROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAds.selectPaidROAS }),
                selectPaidROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAds.selectPaidROASAdd }).locator('span').nth(1),
        }
        const facebook = {
                dataSourceFacebook : customByRole(page, 'option', { name: kpiStaticSelectors.options.facebook.main }).locator('div').nth(1),
                selectFacebookReach : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookReach }),
                selectFacebookReachAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookReachAdd }).locator('span').nth(1),
                selectFacebookCPM : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookCPM }),
                selectFacebookCPMAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookCPMAdd }).locator('span').nth(1),
                selectFacebookCost : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookCost }),
                selectFacebookCostAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookCostAdd }).locator('span').nth(1),
                selectFacebookImpressions : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookImpressions }),
                selectFacebookImpressionsAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookImpressionsAdd }).locator('span').nth(1),
                selectFacebookCPC : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookCPC }),
                selectFacebookCPCAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookCPCAdd }).locator('span').nth(1),
                selectFacebookFrequency : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookFrequency }),
                selectFacebookFrequencyAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookFrequencyAdd }).locator('span').nth(1),
                selectFacebookCTR : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookCTR }),
                selectFacebookCTRAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookCTRAdd }).locator('span').nth(1),
                selectFacebookClicks : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookClicks }),
                selectFacebookClicksAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookClicksAdd }).locator('span').nth(1),
                selectTROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectTROAS }),
                selectTROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectTROASAdd }).locator('span').nth(1),
                selectFacebookROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookROAS }),
                selectFacebookROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookROASAdd }).locator('span').nth(1),
                selectGA4FacebookWebROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectGA4FacebookWebROAS }),
                selectGA4FacebookWebROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectGA4FacebookWebROASAdd }).locator('span').nth(1),
                selectPaidROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectPaidROAS }),
                selectPaidROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectPaidROASAdd }).locator('span').nth(1),

        }

        const googleAnalytics = {
                dataSourceGoogleAnalytics : customByRole(page, 'option', { name: kpiStaticSelectors.options.googleAnalytics.main }).locator('div').nth(1),
                selectAnalyticsSession : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsSession }),
                selectAnalyticsSessionAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsSessionAdd }).locator('span').nth(1),
                selectAnalyticsNewUsers : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsSession }),
                selectAnalyticsNewUsersAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsNewUsersAdd }).locator('span').nth(1),
                selectAnalyticsGoalCompletion : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsGoalCompletion }),
                selectAnalyticsGoalCompletionAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsGoalCompletionAdd }).locator('span').nth(1),
                selectAnalyticsRevenue : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsRevenue }),
                selectAnalyticsRevenueAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsRevenueAdd }).locator('span').nth(1),
                selectAnalyticsEcommerce : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsEcommerce }),
                selectAnalyticsEcommerceAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsEcommerceAdd }).locator('span').nth(1),
                selectAnalyticsUser : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsUser }),
                selectAnalyticsUserAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsUserAdd }).locator('span').nth(1),
                selectGoogleAdsROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectGoogleAdsROAS }),
                selectGoogleAdsROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectGoogleAdsROASAdd }).locator('span').nth(1),
                selectAnalyticsTransactions : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsTransactions }),
                selectAnalyticsTransactionsAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsTransactionsAdd }).locator('span').nth(1),
                selectAnalyticsBounceRate : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsBounceRate }),
                selectAnalyticsBounceRateAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsBounceRateAdd }).locator('span').nth(1),
                selectLastMonthSessions : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectLastMonthSessions }),
                selectLastMonthSessionsAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectLastMonthSessionsAdd }).locator('span').nth(1),
                selectAvgPageLoadTime : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAvgPageLoadTime }),
                selectAvgPageLoadTimeAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAvgPageLoadTimeAdd }).locator('span').nth(1),
                selectAllGoalConversionCompletion : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAllGoalConversionCompletion }),
                selectAllGoalConversionCompletionAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAllGoalConversionCompletionAdd }).locator('span').nth(1),
                selectAnalyticsNewUserRate : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsNewUserRate }),
                selectAnalyticsNewUserRateAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsNewUserRateAdd }).locator('span').nth(1),
                selectAllGoalConversionRate : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAllGoalConversionRate }),
                selectAllGoalConversionRateAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAllGoalConversionRateAdd }).locator('span').nth(1),
                selectGoalConversionRate : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectGoalConversionRate }),
                selectGoalConversionRateAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectGoalConversionRateAdd }).locator('span').nth(1),
                selectAnalyticsROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsROAS }),
                selectAnalyticsROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectAnalyticsROASAdd }).locator('span').nth(1),
                selectTROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectTROAS }),
                selectTROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectTROASAdd }).locator('span').nth(1),
                selectFacebookROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookROAS }),
                selectFacebookROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectFacebookROASAdd }).locator('span').nth(1),

        };
        const googleAnalytics4 ={
                dataSourceGoogleAnalytics4 : customByRole(page, 'option', { name: kpiStaticSelectors.options.googleAnalytics4.main }).locator('div').nth(1),
                selectTotalRevenue : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAnalytics4.selectTotalRevenueAdd }),
                selectTotalRevenueAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAnalytics4.selectTotalRevenueAdd }).locator('span').nth(1),
                selectAdsROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAnalytics4.selectAdsROAS }),
                selectAdsROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAnalytics4.selectAdsROASAdd }).locator('span').nth(1),
                selectGA4FacebookROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAnalytics4.selectGA4FacebookROAS }),
                selectGA4FacebookROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAnalytics4.selectGA4FacebookROASAdd }).locator('span').nth(1),
                selectPaidROAS : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAnalytics4.selectPaidROAS }),
                selectPaidROASAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAnalytics4.selectPaidROASAdd }).locator('span').nth(1),
                selectSessions : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAnalytics4.selectSessions }),
                selectSessionsAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.googleAnalytics4.selectSessionsAdd }).locator('span').nth(1),
                selectConversionRate : customLocator(page, 'span').filter({ hasText: kpiStaticSelectors.options.googleAnalytics4.selectConversionRate }),
                selectConversionRateAdd : customLocator(page, 'div').filter({ hasText: kpiStaticSelectors.options.facebook.selectConversionRateAdd }).locator('span').nth(1),

        }
        return {googleAnalytics4,
                googleAnalytics,
                facebook,
                googleADS,
                googleSearchConsole,
                close,
                removeKpiButton,
                remove,
                kpiCardMenu,
                goToResult,
                createKpiButton,
                enterYourTarget,
                writeYourValue,
                goalTracking,
                addFilter,
                filterDropDown,
                operatorDropDown,
                createNewKpiButton,
                addYourGoalsMultiSelect,
                selectTags,
                tagPlaceholder
        };
}

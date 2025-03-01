
export const kpiStaticSelectors = {
    goalTracking : 'Goal Tracking',
    createNewKpiButton : 'span.font-normal:has-text("+ Create New KPI")',
    addYourGoalsDropDown : '.multiselect__select',
    tagPlaceholder : 'Type tag...',
    tagValue :" KPI OLUSTURMA",
    addFilter : '+ Add Filter',
    filterDropDown : '#vs1__combobox',
    operatorDropDown :'#vs2__combobox',
    writeYourValue : 'Write your value',
    enterYourTarget :'Enter your target',
    createKpiButton : 'Create KPI',
    goToResult : 'Go to Result',
    selectTags: '+',
    kpiCardMenu : '.kpi-card-menu',
    kpiCardMenuRemove : 'Remove',
    removeKpiButton : 'Remove the KPI',
    dropdownIndicatorKPI : "dropdown-indicator",
    defaultDataSource: 'googleSearchConsole',
    defaultGoal : "searchConsoleImpression",

    options: {
        googleSearchConsole: {
            main: 'Google Search Console',
            selectSearchConsoleImpression: 'Search Console Impression',
            selectSearchConsoleImpressionAdd: /^Search Console ImpressionAdd$/,
            selectSearchConsoleClicks : 'Search Console Clicks',
            selectSearchConsoleClicksAdd: /^Search Console ClicksAdd$/,
            selectLastMonthOrganicClick : 'Last Month Organic Click',
            selectLastMonthOrganicClickAdd: /^Last Month Organic ClickAdd$/,
            selectLastMonthOrganicImpressions: 'Last Month Organic Impression',
            selectLastMonthOrganicImpressionsAdd: /^Last Month Organic ImpressionsAdd$/,
            selectLastMonthSessions: 'Last Month Sessions',
            selectLastMonthSessionsAdd: /^Last Month SessionsAdd$/,
            selectOrganicCtr: 'Organic CTR',
            selectOrganicCtrAdd: /^Organic CTRAdd$/,
        },
        googleAds: {
            main: 'Google Ads',
            selectGoogleAdsCtr: 'Google Ads CTR',
            selectGoogleAdsCtrAdd: /^Google Ads CTRAdd$/,
            selectGoogleAdsCpc: 'Google Ads CPC',
            selectGoogleAdsCpcAdd: /^Google Ads CPCAdd$/,
            selectGoogleAdsConversion: 'Google Ads Conversion',
            selectGoogleAdsConversionAdd: /^Google Ads ConversionAdd$/,
            selectKPIMonthlyTargetAdsROAS: 'KPI Monthly Target Ads ROAS(Conversion/Cost)',
            selectKPIMonthlyTargetAdsROASAdd: /^KPI Monthly Target Ads ROAS\(Conversion\/Cost\)Add$/,
            selectGoogleAdsBudget: 'Google Ads Budget',
            selectGoogleAdsBudgetAdd: /^Google Ads BudgetAdd$/,
            selectGoogleAdsImpressions: 'Google Ads Impressions',
            selectGoogleAdsImpressionsAdd: /^Google Ads ImpressionsAdd$/,
            selectAdsCostPerConversion : 'Ads Cost Per Conversion',
            selectAdsCostPerConversionAdd: /^Ads Cost Per ConversionAdd$/,
            selectTROAS :'TROAS(All Revenue/Ads Cost)',
            selectTROASAdd: /^TROAS\(All Revenue\/Ads Cost\)Add$/,
            selectPaidROAS: 'Paid ROAS',
            selectPaidROASAdd: /^Paid ROASAdd$/,
        },
        facebook: {
            main: 'Facebook',
            selectFacebookReach: 'Facebook Reach',
            selectFacebookReachAdd: /^Facebook ReachAdd$/,
            selectFacebookCPM : 'Facebook CPM',
            selectFacebookCPMAdd : /^Facebook CPMAdd$/,
            selectFacebookCost : 'Facebook Cost',
            selectFacebookCostAdd : /^Facebook CostAdd$/,
            selectFacebookImpressions : 'Facebook Impressions',
            selectFacebookImpressionsAdd : /^Facebook ImpressionsAdd$/,
            selectFacebookCPC:  'Facebook CPC',
            selectFacebookCPCAdd : /^Facebook CPCAdd$/,
            selectFacebookFrequency : 'Facebook Frequency',
            selectFacebookFrequencyAdd : /^Facebook FrequencyAdd$/,
            selectFacebookCTR : 'Facebook CTR',
            selectFacebookCTRAdd : /^Facebook CTRAdd$/,
            selectFacebookClicks : 'Facebook Clicks',
            selectFacebookClicksAdd : /^Facebook ClicksAdd$/,
            selectTROAS : 'TROAS(All Revenue/Ads Cost)',
            selectTROASAdd:  /^TROAS\(All Revenue\/Ads Cost\)Add$/,
            selectFacebookROAS : 'Facebook ROAS',
            selectFacebookROASAdd: /^Facebook ROASAdd$/,
            selectGA4FacebookWebROAS: 'GA4 Facebook Web ROAS',
            selectGA4FacebookWebROASAdd: /^GA4 Facebook Web ROASAdd$/,
            selectPaidROAS : 'Paid ROAS',
            selectPaidROASAdd: /^Paid ROASAdd$/,
        },
        googleAnalytics: {
            main: 'Google Analytics',
            selectAnalyticsSession: 'Analytics Session',
            selectAnalyticsSessionAdd: /^Analytics SessionAdd$/,
            selectAnalyticsNewUsers: 'Analytics New User',
            selectAnalyticsNewUsersAdd: /^Analytics New UserAdd$/ ,
            selectAnalyticsGoalCompletion : 'SelectAnalyticsGoalCompletion',
            selectAnalyticsGoalCompletionAdd: /^Analytics Goal CompletionAdd$/,
            selectAnalyticsRevenue: 'Analytics Revenue',
            selectAnalyticsRevenueAdd: /^Analytics RevenueAdd$/,
            selectAnalyticsEcommerce : 'Analytics Ecommerce',
            selectAnalyticsEcommerceAdd: /^Analytics Ecommerce Conversion RateAdd$/,
            selectAnalyticsUser : 'Analytics User',
            selectAnalyticsUserAdd: /^Analytics UserAdd$/,
            selectGoogleAdsROAS : 'Google Ads ROAS',
            selectGoogleAdsROASAdd : /^Google Ads ROASAdd$/,
            selectAnalyticsTransactions : 'Analytics Transactions',
            selectAnalyticsTransactionsAdd : /^Analytics TransactionsAdd$/,
            selectAnalyticsBounceRate : 'Analytics Bounce Rate',
            selectAnalyticsBounceRateAdd : /^Analytics Bounce RateAdd$/,
            selectLastMonthSessions : 'Last Month Sessions',
            selectLastMonthSessionsAdd :/^Last Month SessionsAdd$/,
            selectAvgPageLoadTime : 'Avg. Page Load Time(sec)',
            selectAvgPageLoadTimeAdd : /^Avg\. Page Load Time\(sec\)Add$/,
            selectAllGoalConversionCompletion : 'All Goal Conversion Completion',
            selectAllGoalConversionCompletionAdd :/^All Goal Conversion CompletionAdd$/,
            selectAnalyticsNewUserRate : 'Analytics New User Rate',
            selectAnalyticsNewUserRateAdd : /^Analytics New User RateAdd$/,
            selectAllGoalConversionRate : 'All Goal Conversion Rate',
            selectAllGoalConversionRateAdd :/^All Goal Conversion RateAdd$/,
            selectGoalConversionRate : 'Goal Conversion Rate',
            selectGoalConversionRateAdd :/^Goal Conversion RateAdd$/,
            selectAnalyticsROAS : 'Analytics ROAS',
            selectAnalyticsROASAdd :/^Analytics ROASAdd$/,
            selectTROAS : 'TROAS(All Revenue/Ads Cost)',
            selectTROASAdd:  /^TROAS\(All Revenue\/Ads Cost\)Add$/,
            selectFacebookROAS : 'Facebook ROAS',
            selectFacebookROASAdd: /^Facebook ROASAdd$/,



        },
        googleAnalytics4: {
            main: 'Google Analytics 4',
            selectTotalRevenue: 'Total Revenue',
            selectTotalRevenueAdd: /^Total RevenueAdd$/,
            selectAdsROAS: 'Ads ROAS',
            selectAdsROASAdd: /^Ads ROASAdd$/,
            selectGA4FacebookROAS: 'GA4 Facebook ROAS',
            selectGA4FacebookROASAdd:  /^GA4 Facebook ROASAdd$/,
            selectPaidROAS : 'Paid ROAS',
            selectPaidROASAdd: /^Paid ROASAdd$/,
            selectSessions: 'Sessions',
            selectSessionsAdd: /^SessionsAdd$/,
            selectConversionRate: 'Conversion Rate',
            selectConversionRateAdd: /^Conversion RateAdd$/
        }
    },






};

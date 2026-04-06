const LoginHelper = require('../../Helper/login.helper');
const matterHomePage = require('../pageobjects/matterHome.page');
const AccountPage = require('../pageobjects/Account.page');
const Assert = require('../../Helper/Assert.helper');
const SwipeHelper = require('../../Helper/swipe.helper');
const allure = require('@wdio/allure-reporter').default;

describe('Account Page Validation', () => {

    it('Validate Account Page UI elements', async () => {

        allure.addFeature('Account Page');
        allure.addSeverity('critical');

        allure.addStep('STEP 1: Login into MatterVerse');
        console.log('ACTION: Logging into app');
        await LoginHelper.loginIntoMatterVerse();


        allure.addStep('STEP 2: Navigate to Account Page');
        console.log('ACTION: Navigating to Account Page');
        await matterHomePage.clickMatterHomeLogo();
        await matterHomePage.clickMyMatterTab();
        await matterHomePage.clickAccountTab();


        // ---------- HEADER ----------
        allure.addStep('STEP 3: Validate Account Page Header');
        await Assert.isDisplayed(AccountPage.AccountPageHeader, 'Account Header Not Visible');
        await Assert.containsText(AccountPage.AccountPageHeader, "Account");


        // ---------- BIKE SECTION ----------
        allure.addStep('STEP 4: Validate Bike Details Section');
        await Assert.isDisplayed(AccountPage.BikeName);
        await Assert.isEnabled(AccountPage.BikeName);

        await Assert.isDisplayed(AccountPage.VehicleImage);
        await Assert.isEnabled(AccountPage.VehicleImage);

        await Assert.isDisplayed(AccountPage.BatteryWarrantyActiveText);
        await Assert.containsText(AccountPage.BatteryWarrantyActiveText, "Warranty");


        // ---------- LINKS ----------
        allure.addStep('STEP 5: Validate Account Options Section');

        await Assert.isDisplayed(AccountPage.VehicleSettingsLink);
        await Assert.containsText(AccountPage.VehicleSettingsLink, "Vehicle");

        await Assert.isDisplayed(AccountPage.SecurityLink);
        await Assert.containsText(AccountPage.SecurityLink, "Security");
        await Assert.isClickable(AccountPage.SecurityLink);

        await Assert.isDisplayed(AccountPage.EmergencyContactsLink);
        await Assert.containsText(AccountPage.EmergencyContactsLink, "Emergency");
        await Assert.isClickable(AccountPage.EmergencyContactsLink);

        await Assert.isDisplayed(AccountPage.MyOrdersLink);
        await Assert.containsText(AccountPage.MyOrdersLink, "Orders");


        // ---------- SCROLL DOWN ----------
        allure.addStep('STEP 6: Scroll To Bottom Section');
        console.log("Scrolling down to Logout section");
        await SwipeHelper.scrollDownUntilVisible(AccountPage.LogOutBtn);


        // ---------- BOTTOM SECTION ----------
        allure.addStep('STEP 7: Validate Footer Options');
        await Assert.isDisplayed(AccountPage.ReportAConcernLink);
        await Assert.containsText(AccountPage.ReportAConcernLink, "Concern");

        await Assert.isDisplayed(AccountPage.VersionNumber);

        await Assert.isDisplayed(AccountPage.LogOutBtn);
        await Assert.containsText(AccountPage.LogOutBtn, "Logout");
        await Assert.isClickable(AccountPage.LogOutBtn);


        // ---------- ICONS & EXTRA BUTTONS ----------
        allure.addStep('STEP 8: Validate Help / About / Legal Section');

        await Assert.isDisplayed(AccountPage.NotificationIcon);
        await Assert.isClickable(AccountPage.NotificationIcon);

        await Assert.isDisplayed(AccountPage.HelpButton);
        await Assert.containsText(AccountPage.HelpButton, "Help");

        await Assert.isDisplayed(AccountPage.AboutUsButton);
        await Assert.containsText(AccountPage.AboutUsButton, "About");

        await Assert.isDisplayed(AccountPage.LegalButton);
        await Assert.containsText(AccountPage.LegalButton, "Legal");


        // ---------- TEST SUCCESS ----------
        allure.addStep('STEP 9: Account Page Validation Completed Successfully');
        console.log('SUCCESS: Account Page Verified Successfully');
    });

});

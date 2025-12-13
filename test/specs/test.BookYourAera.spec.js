const VehicleSettingsPage = require('../pageobjects/vehicleSettings.page');
const matterHomePage = require('../pageobjects/matterHome.page');
const LoginHelper = require('../../Helper/login.helper');
const BookYourAeraPage = require('../pageobjects/BookYourAera.page');
const AccountPage = require('../pageobjects/Account.page');
const SwipeHelper = require('../../Helper/Swipe.helper');
// const swipeHelper = new SwipeHelper();

describe('Bike Booking Flow', () => {

    it('should complete the full bike booking flow', async () => {

        await LoginHelper.login("8780981556", "8319");

        await matterHomePage.clickMatterHomeLogo();
        await matterHomePage.clickMyMatterTab();
        await matterHomePage.clickAccountTab();
        // Step 1: Navigate to Vehicle Settings → Documents
        // Click Documents
        await AccountPage.clickMyOrders()

        // Step 1: Click Book Your Aera → choose model
        await BookYourAeraPage.bookYourAeraBtn.click();
        await browser.pause(2000);

        await BookYourAeraPage.aera5000PlusOption.click();
        await browser.pause(2000);

        // Step 2: Select random bike color
        const randomColor = Math.floor(Math.random() * 5) + 1;  // 1–5
        await BookYourAeraPage.bikeColorOption(randomColor).click();
        await browser.pause(2000);

        // Validate bike image is displayed
        await expect(BookYourAeraPage.bikeImage).toBeDisplayed();

        // Step 3: Enter location / pincode
        await BookYourAeraPage.enterYourLocField.click();
        await browser.pause(1000);

        await BookYourAeraPage.enterYourLocInputField.setValue("413502");
        await browser.pause(2000);

        // Step 4: select random location from list
        let locations = await BookYourAeraPage.locationsList;
        let total = locations.length;
        let randomIndex = Math.floor(Math.random() * total);

        await locations[randomIndex].click();
        await browser.pause(2000);

        await SwipeHelper.scrollUntilVisible(BookYourAeraPage.aeraIsAvailableText, 2);
        if (await BookYourAeraPage.sorryAeraNotAvailable.isDisplayed()) {
            await SwipeHelper.scrollUntilVisible(BookYourAeraPage.sorryAeraNotAvailable, 2);
            await browser.pause(4000);
        }
        else {
            await SwipeHelper.scrollUntilVisible(BookYourAeraPage.aeraIsAvailableText, 1);
        }
        await browser.pause(2000);
        // await SwipeHelper.scrollUntilVisible(BookYourAeraPage.emiCard, 1);

        // Step 5: If aera not available → try again
        if (await BookYourAeraPage.sorryAeraNotAvailable.isDisplayed()) {
            await BookYourAeraPage.locationCloseIcon.click();
            await browser.pause(1000);

            await BookYourAeraPage.enterYourLocInputField.setValue("413502");
            await browser.pause(2000);

            locations = await BookYourAeraPage.locationsList;
            total = locations.length;
            randomIndex = Math.floor(Math.random() * total);

            await locations[randomIndex].click();
        } else {
            await expect(BookYourAeraPage.aeraIsAvailableText).toBeDisplayed();
        }

        await SwipeHelper.scrollUntilVisible(BookYourAeraPage.iAgreeCheckbox, 3);
        await browser.pause(2000);

        // Step 6: Verify Order Summary
        await expect(BookYourAeraPage.orderSummeryText).toBeDisplayed();
        await expect(BookYourAeraPage.aeraModelSummary).toBeDisplayed();
        await expect(BookYourAeraPage.aeraColorSummary).toBeDisplayed();
        await expect(BookYourAeraPage.userLocationSummary).toBeDisplayed();
        await expect(BookYourAeraPage.dealerLocSummary).toBeDisplayed();

        // Step 7: Check terms and book
        await BookYourAeraPage.iAgreeCheckbox.click();
        await browser.pause(2000);

        await BookYourAeraPage.bookAeraBtn.click();
        await browser.pause(3000);

        // Step 8: Payment page validation
        await expect(BookYourAeraPage.paymentPageHeader).toBeDisplayed();

        await BookYourAeraPage.upiOption.click();
        await browser.pause(1000);

        // Step 9: Enter UPI ID
        await BookYourAeraPage.upiInputField.setValue("8*&(*@upi");
        await browser.pause(1000);

        await BookYourAeraPage.continueBtn.click();
        await browser.pause(2000);

        // Expect wrong UPI error
        await expect(BookYourAeraPage.upiErrorMsg).toBeDisplayed();
    });

});

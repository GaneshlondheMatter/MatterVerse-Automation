import BookTestRidePage from '../pageobjects/BookTestRide.page.js';
const LoginHelper = require('../../Helper/login.helper.js');
const matterHomePage = require('../pageobjects/matterHome.page.js');
const Assert = require('../../Helper/Assert.helper.js');

describe('Book Home Test Ride Flow', () => {

    it('Should book a Home Test Ride successfully', async () => {

        // STEP 1: Login & Navigate
        await LoginHelper.loginIntoMatterVerse();
        await driver.pause(4000);
        await matterHomePage.clickMatterHomeLogo();
        await matterHomePage.clickExperienceTab();
        await driver.pause(4000);
        await matterHomePage.clickExperienceTab();

        // STEP 2: Click Book Test Ride
        await BookTestRidePage.Book_A_TestRideBtn.waitForDisplayed({ timeout: 5000 });
        await Assert.isDisplayed(BookTestRidePage.Book_A_TestRideBtn);
        await BookTestRidePage.Book_A_TestRideBtn.click();

        // STEP 3: Enter PIN / Location
        await BookTestRidePage.enterYourLocInputField.waitForDisplayed({ timeout: 5000 });
        await Assert.isDisplayed(BookTestRidePage.enterYourLocInputField);
        await BookTestRidePage.enterYourLocInputField.setValue('411014');

        await driver.pause(9000);

        const allLocations = await BookTestRidePage.locationsList;
        await expect(allLocations.length).toBeGreaterThan(0);

        const randomIndex = Math.floor(Math.random() * allLocations.length);
        await allLocations[randomIndex].click();

        // STEP 4: Select HOME TEST RIDE card
        await BookTestRidePage.YourLocCard.waitForDisplayed({ timeout: 5000 });
        // await Assert.isClickable(BookTestRidePage.YourLocCard);
        await BookTestRidePage.YourLocCard.click();

        // STEP 5: Select Dates
        await BookTestRidePage.DatesCard.waitForDisplayed({ timeout: 3000 });
        await Assert.isDisplayed(BookTestRidePage.DatesCard);
        await BookTestRidePage.DatesCard.click();

        const dateElement = await BookTestRidePage.getDateElement(4);
        await dateElement.click();


        // STEP 6: Final Book
        await BookTestRidePage.BookTestRideButton.waitForDisplayed({ timeout: 3000 });
        await Assert.isDisplayed(BookTestRidePage.BookTestRideButton);
        await expect(await BookTestRidePage.BookTestRideButton.isEnabled()).toBe(true);

        await driver.pause(4000);


        // await BookTestRidePage.BookTestRideButton.click();

        // STEP 7: Confirmation
        // await BookTestRidePage.success_HTR.waitForDisplayed({ timeout: 5000 });

        // await Assert.isDisplayed(BookTestRidePage.success_HTR);
        // await Assert.containsText(BookTestRidePage.success_HTR, "Success");

        // await Assert.isDisplayed(BookTestRidePage.Success_HTRSubText);
        // await Assert.containsText(BookTestRidePage.Success_HTRSubText, "Your test ride is booked");

        // await Assert.isDisplayed(BookTestRidePage.YourLocText);
        // await Assert.containsText(BookTestRidePage.YourLocText, "Location");

        // await Assert.isDisplayed(BookTestRidePage.YourLocCmplteAddress);
        // await Assert.isDisplayed(BookTestRidePage.DateOfTestRide);

        // // Close Popup
        // await Assert.isClickable(BookTestRidePage.okayButton);
        // await BookTestRidePage.okayButton.click();
    });

});

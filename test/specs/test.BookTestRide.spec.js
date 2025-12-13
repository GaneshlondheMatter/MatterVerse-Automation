import BookTestRidePage from '../pageobjects/BookTestRide.page.js';
const LoginHelper = require('../../Helper/login.helper');

describe('Book Test Ride Flow', () => {

    it('Should book a test ride successfully', async () => {

        // STEP 1: Click on Book Test Ride button
        await LoginHelper.login("9422935082", "8319");
        await BookTestRidePage.Book_A_TestRideBtn.waitForDisplayed({ timeout: 5000 });
        await BookTestRidePage.Book_A_TestRideBtn.click();

        // STEP 2: Enter PIN / Location input
        await BookTestRidePage.EnterYourLocInputFld.waitForDisplayed({ timeout: 5000 });
        await BookTestRidePage.EnterYourLocInputFld.setValue('411014');

        // Wait for suggestions list
        await driver.pause(2000);

        const allLocations = await BookTestRidePage.locationsList;

        // Pick Random Location
        const randomIndex = Math.floor(Math.random() * allLocations.length);
        await allLocations[randomIndex].click();

        // STEP 3: Select Experience Hub OR Home Test Ride
        if (await BookTestRidePage.YourLocCard.isDisplayed()) {
            await BookTestRidePage.YourLocCard.click();
        } else {
            await BookTestRidePage.ExpCenterCard.click();
        }

        // Select Date
        await BookTestRidePage.DatesCard.waitForDisplayed({ timeout: 3000 });
        // await BookTestRidePage.DatesCard.click();
        // Select date = today + 1
        // await BookTestRidePage.getDateElement(1).click();

        // Select date = today + 3
        await BookTestRidePage.getDateElement(3).click();

        // Select date = today + 5
        // await BookTestRidePage.getDateElement(5).click();


        // STEP 4: Click Final Book Test Ride button
        await BookTestRidePage.BookTestRideButton.waitForDisplayed({ timeout: 3000 });
        // await BookTestRidePage.BookTestRideButton.click();

        // STEP 5: Verify Booking Confirmation Popup
        // await BookTestRidePage.success_HTR.waitForDisplayed({ timeout: 5000 });

        // // STEP 6: Text Validations
        // await expect(BookTestRidePage.success_HTR).toBeDisplayed();
        // await expect(BookTestRidePage.Success_HTRSubText).toBeDisplayed();
        // await expect(BookTestRidePage.YourLocText).toBeDisplayed();
        // await expect(BookTestRidePage.YourLocCmplteAddress).toBeDisplayed();
        // await expect(BookTestRidePage.DateOfTestRide).toBeDisplayed();

        // // Close popup
        // await BookTestRidePage.okayButton.click();
    });

});

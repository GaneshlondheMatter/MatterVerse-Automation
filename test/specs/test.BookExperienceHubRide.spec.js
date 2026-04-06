import BookTestRidePage from '../pageobjects/BookTestRide.page.js';
const LoginHelper = require('../../Helper/login.helper');
const matterHomePage = require('../pageobjects/matterHome.page');
const Assert = require('../../Helper/Assert.helper');

describe('Book Experience Hub Test Ride Flow', () => {

    it('Should book a Experience Hub Test Ride successfully', async () => {

        // STEP 1: Login & Navigate
        await LoginHelper.loginIntoMatterVerse();
        await driver.pause(4000);
        await matterHomePage.clickMatterHomeLogo();
        await driver.pause(4000);
        await matterHomePage.clickExperienceTab();
        await driver.pause(8000);
        await matterHomePage.clickExperienceTab();

        // STEP 2: Click Book Test Ride
        await BookTestRidePage.Book_A_TestRideBtn.waitForDisplayed({ timeout: 5000 });
        await Assert.isDisplayed(BookTestRidePage.Book_A_TestRideBtn);
        await BookTestRidePage.Book_A_TestRideBtn.click();

        // STEP 3: Enter PIN / Location
        await BookTestRidePage.enterYourLocInputField.waitForDisplayed({ timeout: 5000 });
        await Assert.isDisplayed(BookTestRidePage.enterYourLocInputField);
        await BookTestRidePage.enterYourLocInputField.setValue('411014');

        await driver.pause(4000);

        const allLocations = await BookTestRidePage.locationsList;
        expect(allLocations.length).toBeGreaterThan(0);

        const randomIndex = Math.floor(Math.random() * allLocations.length);
        await allLocations[randomIndex].click();

        // STEP 4: Select EXPERIENCE HUB card
        await BookTestRidePage.ExpCenterCard.waitForDisplayed({ timeout: 5000 });
        await BookTestRidePage.ExpCenterCard.click();

        // STEP 5: Select Dates
        await BookTestRidePage.DatesCard.waitForDisplayed({ timeout: 3000 });
        await Assert.isDisplayed(BookTestRidePage.DatesCard);
        await BookTestRidePage.DatesCard.click();

        const dateElement = await BookTestRidePage.getDateElement(4);
        await dateElement.click();

        // STEP 6: Final Book
        await BookTestRidePage.BookTestRideButton.waitForDisplayed({ timeout: 3000 });
        await Assert.isDisplayed(BookTestRidePage.BookTestRideButton);
        // await BookTestRidePage.BookTestRideButton.click();

        // // STEP 7: Confirmation
        // await BookTestRidePage.success_ExperienceHubText.waitForDisplayed({ timeout: 5000 });

        // await Assert.isDisplayed(BookTestRidePage.success_ExperienceHubText);
        // await Assert.containsText(BookTestRidePage.success_ExperienceHubText, "Test ride rescheduled successfully!");

        // await Assert.isDisplayed(BookTestRidePage.ExpeCenterdealerName);
        // await Assert.containsText(BookTestRidePage.ExpeCenterdealerName, "MATTER | Experience Hub, Kharadi - Pune");

        // await Assert.isDisplayed(BookTestRidePage.VisitId);
        // await Assert.isDisplayed(BookTestRidePage.DateOfTestRide);
        // await Assert.isDisplayed(BookTestRidePage.PhoneNumber);
        // await Assert.isDisplayed(BookTestRidePage.okayButton);
        // await Assert.isDisplayed(BookTestRidePage.get_direction);
        // await BookTestRidePage.get_direction.click();
        // await Assert.isDisplayed(BookTestRidePage.Experience_Hub_Kharadi);

    });

});

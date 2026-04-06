const MyVisitAndReschedule = require('../pageobjects/MyVisitAndReschedule.page.js');
const BookTestRide = require('../pageobjects/BookTestRide.page.js');
const LoginHelper = require('../../Helper/login.helper.js');
const matterHomePage = require('../pageobjects/matterHome.page.js');
const Assert = require('../../Helper/Assert.helper.js');

describe('Book Experience Hub Test Ride Flow', () => {

    it('Should book a Experience Hub Test Ride successfully', async () => {

        await LoginHelper.loginIntoMatterVerse();
        await matterHomePage.clickMatterHomeLogo();
        await browser.pause(2000);
        await matterHomePage.clickExperienceTab();
        await browser.pause(2000);
        await matterHomePage.clickExperienceTab();

        await MyVisitAndReschedule.openMyVisits();

        await MyVisitAndReschedule.openFirstUpcomingVisit();
        const currentDate = await MyVisitAndReschedule.getDateValue();
        const match = currentDate.match(/\d+/);
        const baseDay = match ? parseInt(match[0]) : null;
        console.log("Base Day:", baseDay);

        await MyVisitAndReschedule.openReschedule();

        // Get Base Day from UI (keep this in test script)

        // Call smart scheduler with base day
        await MyVisitAndReschedule.smartReschedule(baseDay);
        await browser.pause(10000);
        await BookTestRide.success_ExperienceHubText.waitForDisplayed({ timeout: 10000 });
        await Assert.containsText(BookTestRide.success_ExperienceHubText, "Test ride rescheduled successfully!");
        await Assert.isDisplayed(BookTestRide.ExpeCenterdealerName);
        await Assert.isDisplayed(BookTestRide.VisitId);
        await Assert.isDisplayed(BookTestRide.DateOfTestRide);
        await Assert.isDisplayed(BookTestRide.PhoneNumber);
        await Assert.isDisplayed(BookTestRide.okayButton);

        await BookTestRide.get_direction.click();
        await Assert.isDisplayed(BookTestRide.Experience_Hub_Kharadi);
    });
});
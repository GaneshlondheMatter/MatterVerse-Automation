const RidesPage = require('../pageobjects/Rides.page.js');
const LoginHelper = require('../../Helper/login.helper.js');
const matterHomePage = require('../pageobjects/matterHome.page.js');
const Assert = require('../../Helper/Assert.helper.js');    

describe('Rides Details Page Validation', () => {

    it('Should validate Rides Details Page elements', async () => {                                                     

        // STEP 1: Login & Navigate
        await LoginHelper.loginIntoMatterVerse();
        await driver.pause(4000);                               
        await RidesPage.RidesTab.click();
        await driver.pause(4000);

        // STEP 2: Validate Rides Count
        await Assert.isDisplayed(RidesPage.RidesCount);
        const ridesCountText = await RidesPage.RidesCount.getText();
        console.log('Rides Count Text:', ridesCountText);
        const ridesCount = parseInt(ridesCountText);
        expect(ridesCount).toBeGreaterThanOrEqual(0);   

        // STEP 3: Validate Rides Summary Text
        await Assert.isDisplayed(RidesPage.RidesSummeryText);
        const ridesSummary = await RidesPage.RidesSummeryText.getText();
        console.log('Rides Summary Text:', ridesSummary);
        expect(ridesSummary.length).toBeGreaterThan(0);     
    });
});   
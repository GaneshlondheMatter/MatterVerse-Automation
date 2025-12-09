const DrivingLicensePage = require('../pageobjects/drivingLicense.page');
const VehicleSettingsPage = require('../pageobjects/vehicleSettings.page');
const LoginHelper = require('../../Helper/login.helper');
const matterHomePage = require('../pageobjects/matterHome.page');
const assertionHelper = require('../../Helper/Assert.helper');

describe("Document Upload Driving License", () => {

    it("Should upload front & back side of Driving License successfully", async () => {

        await LoginHelper.login("8780981556", "8319");
         await browser.pause(6000);
        // await matterHomePage.clickMatterHomeLogo();
        //  await browser.pause(6000);
        // await matterHomePage.clickMyMatterTab();
        //  await browser.pause(6000);
        await matterHomePage.clickAccountTab();
         await browser.pause(6000);
        // Step 1: Navigate to Vehicle Settings → Documents
        await VehicleSettingsPage.clickVehicleSettingsLink();
        await browser.pause(5000);

        await VehicleSettingsPage.clickDocumentsLink();
        await browser.pause(5000);
        // Step 2: Open Driving License
        await DrivingLicensePage.openDrivingLicenseSection();
        // If already uploaded, delete both sides first
        if (await DrivingLicensePage.DrivingFrontSideUploaded.isDisplayed() && await DrivingLicensePage.DrivingBackSideUploaded.isDisplayed()) {
            await DrivingLicensePage.deleteFrontSide();
            await DrivingLicensePage.deleteBackSide();
        }
        await browser.pause(5000);

        // Step 3: Upload Front and Back Side
        await DrivingLicensePage.uploadFrontSide(false);
        await DrivingLicensePage.uploadBackSide(false);
        await browser.pause(5000);

        // Step 4: modify both sides
        if (await DrivingLicensePage.DrivingFrontSideUploaded.isDisplayed() && await DrivingLicensePage.DrivingBackSideUploaded.isDisplayed()) {
            await DrivingLicensePage.FrontPageModifyBtn();
            await DrivingLicensePage.uploadFrontSide(true);
            await DrivingLicensePage.BackPageModifyBtn();
            await DrivingLicensePage.uploadBackSide(true);
        }

    });

});

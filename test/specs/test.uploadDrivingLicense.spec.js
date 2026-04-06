const DrivingLicensePage = require('../pageobjects/drivingLicense.page');
const VehicleSettingsPage = require('../pageobjects/vehicleSettings.page');
const LoginHelper = require('../../Helper/login.helper');
const matterHomePage = require('../pageobjects/matterHome.page');
const assertionHelper = require('../../Helper/Assert.helper');

describe("Document Upload Driving License", () => {

    it("Should upload front & back side of Driving License successfully", async () => {

        await LoginHelper.loginIntoMatterVerse();
        await matterHomePage.clickMatterHomeLogo();
        await matterHomePage.clickMyMatterTab();
        await matterHomePage.clickAccountTab();
        // Step 1: Navigate to Vehicle Settings → Documents
        await VehicleSettingsPage.clickVehicleSettingsLink();
        await VehicleSettingsPage.clickDocumentsLink();
        // Step 2: Open Driving License
        await DrivingLicensePage.openDrivingLicenseSection();
        // If already uploaded, delete both sides first
        if (await DrivingLicensePage.DrivingFrontSideUploaded.isDisplayed() && await DrivingLicensePage.DrivingBackSideUploaded.isDisplayed()) {
            await DrivingLicensePage.deleteFrontSide();
            await DrivingLicensePage.deleteBackSide();
        }
        // Step 3: Upload Front and Back Side
        await DrivingLicensePage.uploadFrontSide(false);
        await DrivingLicensePage.uploadBackSide(false);

        // Step 4: modify both sides
        if (await DrivingLicensePage.DrivingFrontSideUploaded.isDisplayed() && await DrivingLicensePage.DrivingBackSideUploaded.isDisplayed()) {
            await DrivingLicensePage.FrontPageModifyBtn();
            await DrivingLicensePage.uploadFrontSide(true);
            await DrivingLicensePage.BackPageModifyBtn();
            await DrivingLicensePage.uploadBackSide(true);
        }
    });
});
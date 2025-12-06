const DrivingLicensePage = require('../pageobjects/drivingLicense.page');
const VehicleSettingsPage = require('../pageobjects/vehicleSettings.page');
const LoginHelper = require('../../Helper/login.helper');
const matterHomePage = require('../pageobjects/matterHome.page');
const assertionHelper = require('../../Helper/Assert.helper');  

describe("Document Upload Driving License", () => {

    it("Should upload front & back side of Driving License successfully", async () => {

        await LoginHelper.login("8780981556", "8319");
        await matterHomePage.clickMatterHomeLogo();
        await matterHomePage.clickMyMatterTab();
        await matterHomePage.clickAccountTab();
        await browser.pause(5000);

        // Step 1: Navigate to Vehicle Settings → Documents
        await VehicleSettingsPage.VehicleSettingsLink.click;
        await VehicleSettingsPage.clickDocumentsLink();

        // Step 2: Open Driving License
        await DrivingLicensePage.openDrivingLicenseSection();

        // Step 3: Upload Front Side
        await DrivingLicensePage.uploadFrontSide();

        // Step 4: Upload Back Side
        await DrivingLicensePage.uploadBackSide();

    });

});

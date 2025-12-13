const DrivingLicensePage = require('../pageobjects/drivingLicense.page');
const VehicleSettingsPage = require('../pageobjects/vehicleSettings.page');
const LoginHelper = require('../../Helper/login.helper');
const UploadProfileHelper = require('../../Helper/Upload.helper');
const matterHomePage = require('../pageobjects/matterHome.page');
const RegistrationDocumentPage = require('../pageobjects/RegistrationDocument.Page');
const assertionHelper = require('../../Helper/Assert.helper');

describe("Document Upload Registration Dcos", () => {

    it("Should upload front & back side of Registration Dcos successfully", async () => {

        await LoginHelper.login("8780981556", "8319");
        // await browser.pause(6000);
        await matterHomePage.clickMatterHomeLogo();
        await matterHomePage.clickMyMatterTab();
        await matterHomePage.clickAccountTab();
        // Step 1: Navigate to Vehicle Settings → Documents
        await VehicleSettingsPage.clickVehicleSettingsLink();
        // Click Documents
        await VehicleSettingsPage.clickDocumentsLink();
        // Step 2: Open Driving License
        await DrivingLicensePage.RegistrationCertificate.click();
        // If already uploaded, delete both sides first
        if (await RegistrationDocumentPage.FirstRegistrationDoc.isDisplayed() && await RegistrationDocumentPage.SecondRegistrationDoc.isDisplayed()) {
            await RegistrationDocumentPage.clickMenuIcon(1);
            await RegistrationDocumentPage.deleteFlow();
            await RegistrationDocumentPage.clickMenuIcon(1);
            await RegistrationDocumentPage.deleteFlow();
        }
        // Upload both sides
        await RegistrationDocumentPage.clickUploadedDocument();
        await UploadProfileHelper.updateDocumentImage();
        await RegistrationDocumentPage.clickUploadedDocument();
        await UploadProfileHelper.updateDocumentImage();


        // Step 4: modify both sides
        if (await RegistrationDocumentPage.FirstRegistrationDoc.isDisplayed() && await RegistrationDocumentPage.SecondRegistrationDoc.isDisplayed()) {
            await RegistrationDocumentPage.clickMenuIcon(1);
            await RegistrationDocumentPage.modiifyFlow();
            await UploadProfileHelper.updateDocumentImage();
            await RegistrationDocumentPage.clickMenuIcon(2);
            await RegistrationDocumentPage.modiifyFlow();
            await UploadProfileHelper.updateDocumentImage();
        }

    });

});

const DrivingLicensePage = require('../pageobjects/drivingLicense.page');
const VehicleSettingsPage = require('../pageobjects/vehicleSettings.page');
const LoginHelper = require('../../Helper/login.helper');
const UploadProfileHelper = require('../../Helper/Upload.helper');
const matterHomePage = require('../pageobjects/matterHome.page');
const RegistrationDocumentPage = require('../pageobjects/RegistrationDocument.Page');
const assertionHelper = require('../../Helper/Assert.helper');
const InsuranceDocumentPage = require('../pageobjects/InsuranceDocument.page');

describe("Document Upload Insurance License", () => {

    it("Should upload front & back side of Insurance License successfully", async () => {

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
        await InsuranceDocumentPage.InsuranceUploadedLink.click();
        // If already uploaded, delete both sides first
        if (await InsuranceDocumentPage.isInsuranceDocDisplayed(1) && await InsuranceDocumentPage.isInsuranceDocDisplayed(2)) {
            await InsuranceDocumentPage.clickMenuButton(1);
            await InsuranceDocumentPage.clickDeleteBtn();
            await InsuranceDocumentPage.clickDeleteConfirmBtn();
            await InsuranceDocumentPage.clickMenuButton(1);
            await InsuranceDocumentPage.clickDeleteBtn();
            await InsuranceDocumentPage.clickDeleteConfirmBtn();
        }
        // Upload both sides
        await InsuranceDocumentPage.UploadInsuranceDoc.click();
        await UploadProfileHelper.updateDocumentImage();
        await InsuranceDocumentPage.UploadInsuranceDoc.click();
        await UploadProfileHelper.updateDocumentImage();


        // Step 4: modify both sides
        if (await InsuranceDocumentPage.isInsuranceDocDisplayed(1) && await InsuranceDocumentPage.isInsuranceDocDisplayed(2)) {
            await InsuranceDocumentPage.clickMenuButton(1);
            await InsuranceDocumentPage.clickModifyBtn();
            await UploadProfileHelper.updateDocumentImage();
            await InsuranceDocumentPage.clickMenuButton(2);
            await InsuranceDocumentPage.clickModifyBtn();
            await UploadProfileHelper.updateDocumentImage();
        }

    });

});

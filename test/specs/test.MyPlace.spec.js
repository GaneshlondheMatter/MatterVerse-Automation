const myPlacesPage = require('../pageobjects/MyPlace.page');
const VehicleSettingsPage = require('../pageobjects/vehicleSettings.page');
const LoginHelper = require('../../Helper/login.helper');
const matterHomePage = require('../pageobjects/matterHome.page');
const assertionHelper = require('../../Helper/Assert.helper');

describe('My Places - Preset Location Flow', () => {

    it('should delete existing presets and add new Home & Work presets', async () => {
        // Step 1: Navigate to My Places → Preset Location

        await LoginHelper.loginIntoMatterVerse();
        await matterHomePage.clickMatterHomeLogo();
        await matterHomePage.clickMyMatterTab();
        await matterHomePage.clickAccountTab();
        // Step 1: Navigate to Vehicle Settings → Documents
        await VehicleSettingsPage.clickVehicleSettingsLink();
        await myPlacesPage.myPlacesLink.click();
        await myPlacesPage.presetLocationLink.click();

        await myPlacesPage.deleteExistingPresets();

        // Step 2: Add Preset 1 (Home)
        await myPlacesPage.addPreset1.click();
        await myPlacesPage.findAPlaceField.click();
        await myPlacesPage.findAPlaceInputField.setValue('Bangalore');
        await myPlacesPage.randomLocation.click();

        // Step 3: Validate Info Card
        await expect(myPlacesPage.infoCard).toBeDisplayed();
        await expect(myPlacesPage.locationIcon).toBeDisplayed();
        await expect(myPlacesPage.placeName).toBeDisplayed();
        await expect(myPlacesPage.address).toBeDisplayed();
        await expect(myPlacesPage.confirmLocationBtn).toBeDisplayed();

        const infoPlaceName1 = await myPlacesPage.placeName.getText();
        const infoAddress1 = await myPlacesPage.address.getText();

        await myPlacesPage.confirmLocationBtn.click();
        await myPlacesPage.HomePresetName.setValue('MyHome');
        await myPlacesPage.SavePreset.click();

        // Step 4: Validate added Home preset
        await expect(myPlacesPage.addedPlaceName1).toHaveText(infoPlaceName1);
        await expect(myPlacesPage.homeAddressName).toHaveText(infoAddress1);

        // Step 5: Add Preset 2 (Work)
        await myPlacesPage.addPreset2.click();
        await myPlacesPage.findAPlaceField.click();
        await myPlacesPage.findAPlaceInputField.setValue('Electronic City');
        await myPlacesPage.randomLocation.click();

        const infoPlaceName2 = await myPlacesPage.placeName.getText();
        const infoAddress2 = await myPlacesPage.address.getText();

        await myPlacesPage.confirmLocationBtn.click();
        await myPlacesPage.HomePresetName.setValue('MyWork');
        await myPlacesPage.SavePreset.click();

        // Validate Work preset
        await expect(myPlacesPage.addedPlaceName2).toHaveText(infoPlaceName2);
        await expect(myPlacesPage.workAddressName).toHaveText(infoAddress2);
    });
});
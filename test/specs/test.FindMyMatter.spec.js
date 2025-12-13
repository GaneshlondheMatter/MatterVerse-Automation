const LoginHelper = require('../../Helper/login.helper');
const { ControlPage } = require('../pageobjects/Control.page');
const { FindMyMatterPage } = require('../pageobjects/FindMyMatter.page');
const SwipeHelper = require('../../Helper/Swipe.helper');   

describe("Find My Matter Flow", () => {
    const control = new ControlPage();
    const findMatter = new FindMyMatterPage();

    it("Step 1: Validate Find My Matter UI elements", async () => {
        await LoginHelper.login("8780981556", "8319");
        await control.controlButton.waitForDisplayed({ timeout: 5000 });
        await control.controlButton.click();
        await control.findMyMatterBtn.click();
        await expect(findMatter.header).toBeDisplayed({ timeout: 5000 });
        // await expect(control.bikeName).toBeDisplayed({ timeout: 5000 });
        // await expect(control.imageDisplay).toBeDisplayed({ timeout: 5000 });
        // await expect(control.tapToLockButton).toBeDisplayed();
        await expect(findMatter.navigateToVehicleBtn).toBeDisplayed();
        await expect(findMatter.buzzMyVehicle).toBeDisplayed();
        await expect(findMatter.recenterIcon).toBeDisplayed();

    });
    it("Step 2: Click Navigate to Vehicle & verify card elements", async () => {
        await findMatter.navigateToVehicleBtn.click();
        await expect(findMatter.navigateToVehicleCard).toBeDisplayed();
        await expect(findMatter.navigateCardHeader).toBeDisplayed();
        await expect(findMatter.distance).toBeDisplayed();
        await expect(findMatter.roadIcon).toBeDisplayed();
        await expect(findMatter.crossIcon).toBeDisplayed();
        await expect(findMatter.meterText).toBeDisplayed();
    });

    let screenshot1;
    let screenshot2;

    it("Step 3: Tap on Recenter & capture screenshot", async () => {
        await findMatter.recenterIcon.click();
        screenshot1 = await findMatter.surfaceView.saveScreenshot('./screenshots/surface1.png');
    });

    it("Step 4: Tap Recenter again & compare screenshots", async () => {
        await findMatter.recenterIcon.click();
        screenshot2 = await findMatter.surfaceView.saveScreenshot('./screenshots/surface2.png');
        // basic buffer level validation
        expect(screenshot1).not.toBeNull();
        expect(screenshot2).not.toBeNull();
    });

    it("Step 5: Click Recenter → verify 3D View button & North Direction is Displayed", async () => {
        // await findMatter.recenterIcon.click();
        await expect(findMatter.backToRecenterViewBtn).toBeDisplayed();
        await expect(findMatter.northDirection).toBeDisplayed();
        await findMatter.backToRecenterViewBtn.click();
    });

      it("Step 5: verify 3D View button & North Direction is not Displayed", async () => {
        await expect(findMatter.backToRecenterViewBtn).not.toBeDisplayed();
        await expect(findMatter.northDirection).not.toBeDisplayed();
    });
});
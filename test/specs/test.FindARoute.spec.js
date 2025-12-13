const LoginHelper = require('../../Helper/login.helper');
const { FindARoutePage } = require('../pageobjects/FindARoute.page');
const { ControlPage } = require('../pageobjects/Control.page');
const SwipeHelper = require('../../Helper/Swipe.helper');

describe("Find A Route Flow", () => {
    const control = new ControlPage();
    const findARoute = new FindARoutePage();

    it("Step 1: Validate Find A Route UI elements", async () => {

        await LoginHelper.login("8780981556", "8319");
        await control.controlButton.waitForDisplayed({ timeout: 5000 });
        await SwipeHelper.scrollDownUntilVisible(control.findARouteBtn);
        await control.findARouteBtn.click();
        await findARoute.Header.waitForDisplayed({ timeout: 5000 });
        // 1. Search Location
        await findARoute.FindARouteField.click();
        await findARoute.FindARouteInputField.setValue('Bangalore');

        // 2. Select random location
        await findARoute.selectRandomLocation();

        // 3. Verify location details card
        await expect(findARoute.LocationDetailsCard).toBeDisplayed();
        await expect(findARoute.LocationIcon).toBeDisplayed();
        await expect(findARoute.LocationName).toBeDisplayed();
        await expect(findARoute.LocationAddress).toBeDisplayed();

        console.log('Location Name:', await findARoute.LocationName.getText());
        console.log('Location Address:', await findARoute.LocationAddress.getText());

        await expect(findARoute.DonwloadBtn).toBeDisplayed();
        await expect(findARoute.SavePresetBtn).toBeDisplayed();
        await expect(findARoute.ViewRoute).toBeDisplayed();
        await expect(findARoute.PushToVehicleBtn).toBeDisplayed();

        // 4. View Route & choose start location
        await findARoute.ViewRoute.click();
        await findARoute.ChooseStartLOcationField.click();
        await findARoute.FindARouteInputField.setValue('Mumbai');
        await findARoute.selectRandomLocation();

        // 5. Verify Route Details
        await expect(findARoute.RouteCard).toBeDisplayed();
        await expect(findARoute.Direction).toBeDisplayed();
        await expect(findARoute.PushToVehicleRoute).toBeDisplayed();

        // 6. Directions
        await findARoute.Direction.click();
        await expect(findARoute.Header).toHaveText('Directions');

        // 7. Verify Directions page
        await expect(findARoute.StartLocation).toBeDisplayed();
        await expect(findARoute.RoutePreview).toBeDisplayed();
        await expect(findARoute.PushToVehicleRoute).toBeDisplayed();

        // 8. Route Preview
        await findARoute.RoutePreview.click();
        await expect(findARoute.RoutePreviewCard).toBeDisplayed();
        await expect(findARoute.TurnByTurnNavigation).toBeDisplayed();
        await expect(findARoute.PreviousBtn).toBeDisplayed();
        await expect(findARoute.NextBtn).toBeDisplayed();
        await expect(findARoute.PushToVehicleDirectionBtn).toBeDisplayed();

        // 9. Push To Vehicle
        await findARoute.PushToVehicleDirectionBtn.click();
        await expect(findARoute.BackButton).toBeDisplayed();
        await expect(findARoute.ProceedBtn).toBeDisplayed();

        // 10. Proceed
        await findARoute.ProceedBtn.click();
        await expect(findARoute.SuccessFullMsg).toBeDisplayed();
        await expect(findARoute.OkayBtn).toBeDisplayed();
        await expect(findARoute.SuccessIcon).toBeDisplayed();

        // 11. Verify Pushed Routes
        await findARoute.OkayBtn.click();
        await expect(findARoute.PushedRouteCards).toBeDisplayed();
        await expect(findARoute.Header).toBeDisplayed();
    });
});



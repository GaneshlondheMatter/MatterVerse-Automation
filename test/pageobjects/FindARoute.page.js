const { $ } = require('@wdio/globals');
const Page = require('./page');

class FindARoutePage {

    // Header
    get Header() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvHeading"]');
    }

    // Search
    get FindARouteField() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvFindARoute"]');
    }

    get FindARouteInputField() {
        return $('//android.widget.EditText[@resource-id="com.matter.companion.qa:id/edtFindARoute"]');
    }

    // Location List
    get LocationList() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.matter.companion.qa:id/rvLocations"]');
    }

    get LocationItems() {
        return $$('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.matter.companion.qa:id/rvLocations"]/*');
    }

    // Location Details Card
    get LocationDetailsCard() {
        return $('//android.view.ViewGroup[@resource-id="com.matter.companion.qa:id/infoCard"]');
    }

    get LocationIcon() {
        return $('//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivLocation"]');
    }

    get LocationName() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvplaceName"]');
    }

    get LocationAddress() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvAddress"]');
    }

    // Action Buttons
    get DonwloadBtn() {
        return $('//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivDownload"]');
    }

    get SavePresetBtn() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvSavePreset"]');
    }

    get ViewRoute() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvViewRoute"]');
    }

    get PushToVehicleBtn() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvPushToVehcile"]');
    }

    // Route Selection
    get ChooseStartLOcationField() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/etStartDestination"]');
    }

    get RouteCard() {
        return $('//android.view.ViewGroup[@resource-id="com.matter.companion.qa:id/routeCard"]');
    }

    get Direction() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvDirectionRouteCard"]');
    }

    get PushToVehicleRoute() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvPushToVehcileRoute"]');
    }

    // Directions
    get StartLocation() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvLocationName" and @text="Start Location"]');
    }

    get RoutePreview() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvRoutePreview"]');
    }

    get RoutePreviewCard() {
        return $('//android.view.ViewGroup[@resource-id="com.matter.companion.qa:id/routeDetailDirection"]');
    }

    get TurnByTurnNavigation() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvLocationName"]');
    }

    get PreviousBtn() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/iv_back"]');
    }

    get NextBtn() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/iv_forward"]');
    }

    get PushToVehicleDirectionBtn() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvPushToVehcileRouteDirection"]');
    }

    // Push To Vehicle
    get BackButton() {
        return $('//android.widget.Button[@resource-id="com.matter.companion.qa:id/buttonBack"]');
    }

    get ProceedBtn() {
        return $('//android.widget.Button[@resource-id="com.matter.companion.qa:id/buttonContinue"]');
    }

    get SuccessFullMsg() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvRoute"]');
    }

    get OkayBtn() {
        return $('//android.widget.Button[@resource-id="com.matter.companion.qa:id/buttonOkay"]');
    }

    get SuccessIcon() {
        return $('//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivError"]');
    }

    get PushedRouteCards() {
        return $('//android.view.ViewGroup[@resource-id="com.matter.companion.qa:id/clRoot"]');
    }

    // ================================
    // Reusable Actions
    // ================================
    async selectRandomLocation() {
        await this.LocationList.waitForDisplayed();
        const items = await this.LocationItems;
        const randomIndex = Math.floor(Math.random() * items.length);
        await items[randomIndex].click();
    }
}

module.exports = { FindARoutePage };

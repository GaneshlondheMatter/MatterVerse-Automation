const { $ } = require('@wdio/globals');
const Page = require('./page');

class VehicleSettingsPage extends Page {

    // ------------------- LOCATORS -------------------

    get NotificationPreference() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvNotification"]');
    }

    get DocumentsLink() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvMyDocument"]');
    }

    get MyPlacesLink() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_my_places"]');
    }

    get VehicleDetailsLink() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvVehicleDetails"]');
    }

     get VehicleSettingsLink() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvbikeDetails"]');
    }

    // ------------------- COMMON CLICK ACTION -------------------

    async clickElement(element) {
        await browser.waitUntil(
            async () => (await element.isDisplayed()) && (await element.isEnabled()),
            {
                timeout: 8000,
                timeoutMsg: 'Element is not visible/clickable'
            }
        );
        await element.click();
    }

    // ------------------- ACTION METHODS -------------------

    async clickNotificationPreference() {
        await this.clickElement(this.NotificationPreference);
    }

    async clickDocumentsLink() {
        await this.clickElement(this.DocumentsLink);
    }

    async clickMyPlacesLink() {
        await this.clickElement(this.MyPlacesLink);
    }

    async clickVehicleDetailsLink() {
        await this.clickElement(this.VehicleDetailsLink);
    }

}

module.exports = new VehicleSettingsPage();

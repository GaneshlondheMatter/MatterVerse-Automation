const { $ } = require('@wdio/globals');
const Page = require('./page');

class AccountPage extends Page {

    // ---------- LOCATORS ----------
    get AccountPageHeader() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvHeading']");
    }

    get BikeName() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvBikeName']");
    }

    get VehicleImage() {
        return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivBikeImage']");
    }

    get BatteryWarrantyActiveText() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/etBikeWarranty']");
    }

    get VehicleSettingsLink() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvbikeDetails']");
    }

    get SecurityLink() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvSecurity']");
    }

    get EmergencyContactsLink() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvEmergencyContact']");
    }

    get MyOrdersLink() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvMyOrders']");
    }

    get ReportAConcernLink() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvReportAConcern']");
    }

    get VersionNumber() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvAppVersion']");
    }

    get LogOutBtn() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvLogout']");
    }

    get NotificationIcon() {
        return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivNotification']");
    }

    get HelpButton() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvHelp']");
    }

    get AboutUsButton() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvAboutUs']");
    }

    get LegalButton() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvlegal']");
    }


    // ---------- ACTIONS ----------
    async clickVehicleSettings() {
        await this.VehicleSettingsLink.click();
    }

    async clickSecurity() {
        await this.SecurityLink.click();
    }

    async clickEmergencyContacts() {
        await this.EmergencyContactsLink.click();
    }

    async clickMyOrders() {
        await this.MyOrdersLink.click();
    }

    async clickReportAConcern() {
        await this.ReportAConcernLink.click();
    }

    async clickLogout() {
        await this.LogOutBtn.click();
    }

    async clickNotificationIcon() {
        await this.NotificationIcon.click();
    }

    async clickHelp() {
        await this.HelpButton.click();
    }

    async clickAboutUs() {
        await this.AboutUsButton.click();
    }

    async clickLegal() {
        await this.LegalButton.click();
    }


    // // Page open method (if needed)
    // open() {
    //     return super.open('/account');
    // }
}

module.exports = new AccountPage();

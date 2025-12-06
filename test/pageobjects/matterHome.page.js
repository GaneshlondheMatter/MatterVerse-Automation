const { $, expect } = require('@wdio/globals');
const Page = require('./page');
class MatterHomePage extends Page {

    // ------------------ LOCATORS ------------------
    get MatterHomeLogo() {
        return $('//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/tvMatter"]');
    }

    get MyMatterTab() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvRide"]');
    }

    get ExperienceTab() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvExperience"]');
    }

    get CareTab() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvCare"]');
    }

    get AccountTab() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvAccount"]');
    }

    get RidesTab() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvRides"]');
    }

    get ControlTab() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvControl"]');
    }

    // ------------------ HELPER FUNCTION ------------------
    async clickElement(element) {
        await element.waitForDisplayed({ timeout: 5000 });
        await element.click();
    }

    // ------------------ ACTIONS ------------------

    async clickMatterHomeLogo() {
        await this.clickElement(this.MatterHomeLogo);
    }

    async clickMyMatterTab() {
        await this.clickElement(this.MyMatterTab);
    }

    async clickExperienceTab() {
        await this.clickElement(this.ExperienceTab);
    }

    async clickCareTab() {
        await this.clickElement(this.CareTab);
    }

    async clickAccountTab() {
        await this.clickElement(this.AccountTab);
    }

    async clickRidesTab() {
        await this.clickElement(this.RidesTab);
    }

    async clickControlTab() {
        await this.clickElement(this.ControlTab);
    }

}

module.exports = new MatterHomePage();

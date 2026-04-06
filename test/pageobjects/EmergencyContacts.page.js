class EmergencyContactsPage {

    // Locators
    get emergencyLink() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvEmergencyContact"]');
    }

    getMainContainers() {
        return $$('//android.view.ViewGroup[@resource-id="com.matter.companion.qa:id/clMain"]');
    }
    getMainContainer(index) {
        return $(`(//android.view.ViewGroup[@resource-id="com.matter.companion.qa:id/clMain"])[${index}]`);
    }

    getAddContactIcons() {
        return $$('//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivAddContact"]');
    }
    getAddContactIcon(index) {
        return $(`(//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivAddContact"])[${index}]`);
    }

    get contactIcon() {
        return $('//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/imgContact"]');
    }

    get contactNumberList() {
        return $$('//android.widget.LinearLayout[@resource-id="com.samsung.android.app.contacts:id/contact_list_text_area"]');
    }

    get saveButton() {
        return $('//android.widget.Button[@resource-id="com.matter.companion.qa:id/btnSaveContact"]');
    }

    getMenuOptionButton(index) {
        return $(`(//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivOptionContact"])[${index}]`);
    }
    getMenuOptionButtons() {
        return $$('//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivOptionContact"]');
    }


    get deleteButton() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvDelete"]');
    }

    get deleteConfirmButton() {
        return $('//android.widget.Button[@resource-id="com.matter.companion.qa:id/btnConfirm"]');
    }
    get nameInputField() {
        return $('//android.widget.EditText[@resource-id="com.matter.companion.qa:id/edtContactName"]');
    }

    get phoneNumberInputField() {
        return $('//android.widget.EditText[@resource-id="com.matter.companion.qa:id/edtPhoneNumber"]');
    }



    // Actions
    async clickEmergencyLink() {
        await this.emergencyLink.waitForDisplayed();
        await this.emergencyLink.click();
    }

    async isAddContactIconDisplayed() {
        return await this.addContactIcon.isDisplayed();
    }

    async addRandomContact() {

        await this.contactIcon.waitForDisplayed({ timeout: 10000 });
        await this.contactIcon.click();

        await browser.waitUntil(
            async () => (await this.contactNumberList).length > 0,
            { timeout: 15000 }
        );

        const contacts = await this.contactNumberList;

        const randomIndex = Math.floor(Math.random() * contacts.length);

        await contacts[randomIndex].waitForDisplayed({ timeout: 10000 });
        await contacts[randomIndex].click();

        await this.saveButton.waitForDisplayed({ timeout: 10000 });
        await this.saveButton.click();
    }

  async addNewEmergencyContact(name, number) {
        await this.nameInputField.waitForDisplayed({ timeout: 5000 });
        await this.nameInputField.setValue(name);

        await this.phoneNumberInputField.waitForDisplayed({ timeout: 5000 });
        await this.phoneNumberInputField.setValue(number);

        await this.saveButton.waitForDisplayed({ timeout: 5000 });
        await this.saveButton.click();
    }

    async deleteExistingContact() {
        await this.menuOptionButton.click();
        await this.deleteButton.click();
        await this.deleteConfirmButton.click();
    }
}



module.exports = new EmergencyContactsPage();

const { $ } = require('@wdio/globals');
const Page = require('./page');

class RegistrationDocumentPage extends Page {

    // ---------------- LOCATORS ----------------

    get Header() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvHeading']");
    }

    get RegistrationUploadedDoc() {
        return $("(//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivdocument'])[1]");
    }

    get MenuBtn() {
        return $("(//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivMenu'])[1]");
    }

    get ModifyBtn() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvModify']");
    }

    get DeleteBtn() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvDelete']");
    }

    get DeleteConfirmBtn() {
        return $("//android.widget.Button[@resource-id='com.matter.companion.qa:id/btnDelete']");
    }

    get UploadRegistrationDoc() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvUploadOne']");
    }


    // ---------------- ACTIONS ----------------

    async clickMenu() {
        await this.MenuBtn.click();
    }

    async clickModify() {
        await this.ModifyBtn.click();
    }

    async clickDelete() {
        await this.DeleteBtn.click();
    }

    async clickDeleteConfirm() {
        await this.DeleteConfirmBtn.click();
    }

    async clickUploadedDocument() {
        await this.RegistrationUploadedDoc.click();
    }

    async clickUploadRegistrationDoc() {
        await this.UploadRegistrationDoc.click();
    }

    // Optional → verify page loaded
    async isPageLoaded() {
        return await this.Header.isDisplayed();
    }

}

module.exports = new RegistrationDocumentPage();

const { $ } = require('@wdio/globals');
const Page = require('./page');

class RegistrationDocumentPage extends Page {

    // ---------------- LOCATORS ----------------

    get Header() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvHeading']");
    }

  get RegistrationUploadedDoc() {
    return $("(//android.view.ViewGroup[@resource-id='com.matter.companion.qa:id/viewUploadOne']/android.view.ViewGroup)");
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

    get FirstRegistrationDoc() {
        return $("(//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivdocument'])[1]");
    }
    get SecondRegistrationDoc() {
        return $("(//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivdocument'])[2]");
    }
    getMenuIcon(index) {
        return $(`(//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivMenu"])[${index}]`);
    }



    // ---------------- ACTIONS ----------------

    async clickMenuIcon(index) {
    await this.getMenuIcon(index).click();
}


    async deleteFlow() {
        await this.DeleteBtn.click();
        await this.DeleteConfirmBtn.click();
    }
    async modiifyFlow() {
        await this.ModifyBtn.click();

    }

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

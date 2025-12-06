const { $ } = require('@wdio/globals');
const Page = require('./page');

class InsuranceDocumentPage extends Page {

    // ---------------- LOCATORS ----------------

    get InsuranceUploadedDoc() {
        return $("(//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivdocument'])[1]");
    }

    get MenuButton() {
        return $("(//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivMenu'])[1]");
    }

    get UploadInsuranceDoc() {
        return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvUploadOne']");
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


    // ---------------- CLICK ACTIONS ----------------

    async clickInsuranceUploadedDoc() {
        await this.InsuranceUploadedDoc.click();
    }

    async clickMenuButton() {
        await this.MenuButton.click();
    }

    async clickUploadInsuranceDoc() {
        await this.UploadInsuranceDoc.click();
    }

    async clickModifyBtn() {
        await this.ModifyBtn.click();
    }

    async clickDeleteBtn() {
        await this.DeleteBtn.click();
    }

    async clickDeleteConfirmBtn() {
        await this.DeleteConfirmBtn.click();
    }

}

module.exports = new InsuranceDocumentPage();

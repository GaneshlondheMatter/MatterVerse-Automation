const { $ } = require('@wdio/globals');
const Page = require('./page');

class InsuranceDocumentPage extends Page {

    // ---------------- LOCATORS ----------------

    get InsuranceUploadedLink() {
        return $("(//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvInsurance'])");
    }
    getInsuranceUploadedDoc(index) {
        return $(`(//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivdocument'])[${index}]`);
    }

  getMenuButton(index) {
    return $(`(//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivMenu'])[${index}]`);
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

    async isInsuranceDocDisplayed(index) {
        return await this.getInsuranceUploadedDoc(index).isDisplayed();
    }

    async clickInsuranceUploadedDoc() {
        await this.InsuranceUploadedDoc.click();
    }

 async clickMenuButton(index) {
    await this.getMenuButton(index).click();
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

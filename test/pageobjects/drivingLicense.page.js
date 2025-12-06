const { $ } = require('@wdio/globals');
const Page = require('./page');


class DrivingLicensePage extends Page  {

    // ------------------- LOCATORS -------------------

    get DrivingLicenseHeader() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvHeading"]');
    }

    get DrivingLicenseLink() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvDrivingLicense"]');
    }

    get RegistrationCertificate() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvRegistration_Certificate"]');
    }

    get InsuranceLink() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvRegistration_Certificate"]');
    }

    get UploadFrontSide() {
        return $('//android.view.ViewGroup[@resource-id="com.matter.companion.qa:id/viewUploadOne"]');
    }

    get UploadBackSide() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvUploadTwo"]');
    }

    get CameraOption() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvCamer"]');
    }

    get GalleryOption() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvGallery"]');
    }

    get UploadPopCloseIcon() {
        return $('//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivCrossing"]');
    }

    get DownloadFolder() {
        return ('(//android.widget.ImageView[@resource-id="com.sec.android.gallery3d:id/thumbnail"])[5]');
    }

    get SelectItem() {
        return $('//android.widget.FrameLayout[@resource-id="com.sec.android.gallery3d:id/deco_view_layout"]');
    }

    get CancelBtn() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvCancel"]');
    }

    get DoneBtn() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvCropDone"]');
    }

    get RotateButton() {
        return $('//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivRetake"]');
    }

    get FrontPageMenuBtn() {
        return $('//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivMenu"]');
    }

    get BackPageMenuBtn() {
        return $('//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivMenuBack"]');
    }

    get DeleteBtn() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvDelete"]');
    }

    get ModifyBtn() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvModify"]');
    }

    get DeleteConfirmBtn() {
        return $('//android.widget.Button[@resource-id="com.matter.companion.qa:id/btnDelete"]');
    }

    get DeleteConfirmPop() {
        return $('//android.widget.FrameLayout[@resourceid="com.matter.companion.qa:id/design_bottom_sheet"]/android.view.ViewGroup');
    }

    get DeleteCloseIcon() {
        return $('//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivCross"]');
    }

    // ------------------- WAIT + CLICK METHOD -------------------

    async clickElement(element) {
        await browser.waitUntil(
            async () => (await element.isDisplayed()) && (await element.isEnabled()),
            {
                timeout: 10000,
                timeoutMsg: "Element not clickable"
            }
        );
        await element.click();
    }

    // ------------------- MAIN ACTION METHODS -------------------

    async openDrivingLicenseSection() {
        await this.clickElement(this.DrivingLicenseLink);
    }

    async uploadFrontSide() {
        await this.clickElement(this.UploadFrontSide);
        await this.clickElement(this.GalleryOption);
        await this.clickElement($(this.DownloadFolder));
        await this.clickElement(this.SelectItem);
        await this.clickElement(this.DoneBtn);
    }

    async uploadBackSide() {
        await this.clickElement(this.UploadBackSide);
        await this.clickElement(this.GalleryOption);
        await this.clickElement($(this.DownloadFolder));
        await this.clickElement(this.SelectItem);
        await this.clickElement(this.DoneBtn);
    }

    async deleteFrontSide() {
        await this.clickElement(this.FrontPageMenuBtn);
        await this.clickElement(this.DeleteBtn);
        await this.clickElement(this.DeleteConfirmBtn);
    }

    async deleteBackSide() {
        await this.clickElement(this.BackPageMenuBtn);
        await this.clickElement(this.DeleteBtn);
        await this.clickElement(this.DeleteConfirmBtn);
    }

}

module.exports = new DrivingLicensePage();

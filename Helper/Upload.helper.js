class UploadProfileHelper {

    get profileImage() {
        return $('android=new UiSelector().resourceId("com.matter.companion.qa:id/ivUserImage")');
    }

    get gallery() {
        return $('android=new UiSelector().resourceId("com.matter.companion.qa:id/tvGallery")');
    }

    get selectImageFromPhone() {
        return $('(//android.widget.ImageView[@resource-id="com.sec.android.gallery3d:id/thumbnail"])[5]');
    }

    get selectImageItem() {
        return $('android=new UiSelector().resourceId("com.sec.android.gallery3d:id/deco_view_layout")');
    }

    get doneButton() {
        return $('android=new UiSelector().resourceId("com.matter.companion.qa:id/tvCropDone")');
    }
    // Upload Profile Image
    async updateProfileImage() {
        await this.profileImage.click();
        await this.profileImage.click();        // Double tap to open options
        await this.gallery.click();
        await this.selectImageFromPhone.click();
        await this.selectImageItem.click();
        await this.doneButton.click();
    }
    // Upload Profile Image
    async updateDocumentImage() {
        // Double tap to open options
        await this.gallery.click();
        await this.selectImageFromPhone.click();
        await this.selectImageItem.click();
        await this.doneButton.click();
    }

}

module.exports = new UploadProfileHelper();

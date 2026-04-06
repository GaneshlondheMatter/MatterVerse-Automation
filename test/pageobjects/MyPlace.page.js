const { $ } = require('@wdio/globals');
const Page = require('./page');

class MyPlacesPage {
    // Header & Navigation
    get header() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvHeading']"); }
    get myPlacesLink() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tv_my_places']"); }
    get presetLocationLink() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvPresetLocations']"); }

    // Existing Presets
    get existingPresetOne() { return $("//android.view.ViewGroup[@resource-id='com.matter.companion.qa:id/clPreset1Data']"); }
    get existingPresetTwo() { return $("//android.view.ViewGroup[@resource-id='com.matter.companion.qa:id/clPreset2Data']"); }

    // Menu & Delete
    get menuButtonOne() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivOption1']"); }
    get menuButtonTwo() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivOption2']"); }
    get deleteOption() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvDelete']"); }
    get confirmDeleteBtn() { return $("//android.widget.Button[@resource-id='com.matter.companion.qa:id/btnDelete']"); }

    // Add Preset
    get addPreset1() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivAddPreset1']"); }
    get addPreset2() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivAddPreset2']"); }

    // Find a Place
    get findAPlaceField() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvFindARoute']"); }
    get findAPlaceInputField() { return $("//android.widget.EditText[@resource-id='com.matter.companion.qa:id/edtFindARoute']"); }
    get locationsList() { return $("//androidx.recyclerview.widget.RecyclerView[@resource-id='com.matter.companion.qa:id/rvRecentLocations']"); }
    get randomLocation() { return $("(//androidx.recyclerview.widget.RecyclerView[@resource-id='com.matter.companion.qa:id/rvRecentLocations']//android.view.ViewGroup)[1]"); }

    // Info Card
    get infoCard() { return $("//android.view.ViewGroup[@resource-id='com.matter.companion.qa:id/infoCard']"); }
    get locationIcon() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivLocation']"); }
    get placeName() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvplaceName']"); }
    get address() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvAddress']"); }
    get confirmLocationBtn() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvViewRoute']"); }
    get HomePresetName() { return $("//android.widget.EditText[@resource-id='com.matter.companion.qa:id/edtPresetName']"); }
    get SavePreset() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvSavePreset']"); }

    // Result Validation
    get addedPlaceName1() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvResultLine1']"); }
    get homeAddressName() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvAddressHome']"); }
    get addedPlaceName2() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvResultLine2']"); }
    get workAddressName() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvAddressWork']"); }

//android.widget.TextView[@text="Searching..."]
async deleteExistingPresets() {
    // Try deleting Preset 1
    try {
        await this.menuButtonOne.waitForDisplayed({ timeout: 2000 });
        await this.menuButtonOne.click();
        await this.deleteOption.click();
        await this.confirmDeleteBtn.click();
        await browser.pause(1200);
    } catch (e) {
        // Preset 1 not present – ignore
    }

    // Try deleting Preset 2 (if present)
    try {
        await this.menuButtonTwo.waitForDisplayed({ timeout: 2000 });
        await this.menuButtonTwo.click();
        await this.deleteOption.click();
        await this.confirmDeleteBtn.click();
        await browser.pause(1200);
    } catch (e) {
        // Preset 2 not present – ignore
    }
}

}

module.exports = new MyPlacesPage();
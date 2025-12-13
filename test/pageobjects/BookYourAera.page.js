const { $ } = require('@wdio/globals');
const Page = require('./page');

class BookYourAeraPage {

    // ---------------------- POPUP ----------------------
    get ownAeraPopup() { return $(`//android.view.ViewGroup[@resource-id="com.matter.companion.qa:id/clAlreadyBuy"]`); }
    get closeIcon() { return $(`//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/iv_cross"]`); }

    // ---------------------- MAIN ----------------------
    get bookYourAeraBtn() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_book_another_aera"]`); }
    get bookYourAeraHeader() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvHeading"]`); }
    get chooseYourAeraText() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_choose_your_aera"]`); }
    get aera5000PlusOption() { return $(`//android.widget.TextView[@text="AERA 5000+"]`); }
    get aera5000Option() { return $(`//android.widget.TextView[@text="AERA 5000"]`); }

    // Bike Image
    get bikeImage() {
        return $(`//androidx.viewpager.widget.ViewPager[@resource-id="com.matter.companion.qa:id/vp_bike"]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup/android.widget.ImageView`);
    }

    // ---------------------- DYNAMIC COLOR OPTION ----------------------
    bikeColorOption(index) {
        return $(`//androidx.recyclerview.widget.RecyclerView[@resource-id="com.matter.companion.qa:id/rv_bike_color"]/android.view.ViewGroup[${index}]/android.widget.ImageView`);
    }

    // ---------------------- BIKE DETAILS ----------------------
    get bikeModel() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_bike_model"]`); }
    get bikeColor() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_bike_color"]`); }
    get bikeInfo() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_bike_info"]`); }
    get compareLink() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_compare"]`); }

    // ---------------------- LOCATION ----------------------
    get enterYourLocText() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_enter_your_location"]`); }
    get enterYourLocField() { return $(`//android.widget.EditText[@resource-id="com.matter.companion.qa:id/et_enter_your_location"]`); }
    get enterYourLocInputField() { return $(`//android.widget.EditText[@resource-id="com.matter.companion.qa:id/et_find_a_place"]`); }
    get locationsList() { return $$(`//androidx.recyclerview.widget.RecyclerView[@resource-id="com.matter.companion.qa:id/rv_locations"]//android.widget.TextView`); }
    get sorryAeraNotAvailable() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_aera_not_available_at_location"]`); }
    get locationCloseIcon() { return $(`//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/iv_edt_location_cross"]`); }

    // ---------------------- AVAILABLE ----------------------
    get aeraIsAvailableText() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_aera_available_at_location"]`); }

    // ---------------------- DEALERS ----------------------
    get experienceHubCard() { return $(`//androidx.recyclerview.widget.RecyclerView[@resource-id="com.matter.companion.qa:id/rv_dealers"]/android.view.ViewGroup[1]`); }
    get expHubKharadi() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_dealer_name" and @text="MATTER | Experience Hub, Kharadi - Pune"]`); }
    get expHubKharadiDist() { return $(`//android.widget.TextView[contains(@resource-id,"com.matter.companion.qa:id/tv_dealer_distance") and contains(@text,"kms")]`); }
    get expHubMumbai() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_dealer_name" and @text="MATTER | Experience Hub Sakinaka - Mumbai"]`); }
    get emiCard() { return $('//android.view.ViewGroup[@resource-id="com.matter.companion.qa:id/cl_emi"]'); }

    // ---------------------- ORDER SUMMARY ----------------------
    get iAgreeCheckbox() { return $('//android.widget.CheckBox[@resource-id="com.matter.companion.qa:id/cb_agree"]'); }
    get bookAeraBtn() { return $(`//android.widget.Button[@resource-id="com.matter.companion.qa:id/btn_book_your_aera"]`); }

    get orderSummeryText() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_order_summary"]`); }
    get aeraModelSummary() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_selection_bike_model"]`); }
    get aeraColorSummary() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_selection_bike_color"]`); }
    get userLocationSummary() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_location_value"]`); }
    get dealerLocSummary() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_dealer_value"]`); }

    // ---------------------- PAYMENT ----------------------
    get paymentPageHeader() { return $(`//android.widget.TextView[@text="MATTER MOTOR WORKS PRIVATE LIMITED"]`); }
    get upiOption() { return $(`//android.widget.TextView[@text="UPI"]`); }
    get upiHeader() { return $(`//android.widget.TextView[@text="UPI"]`); }
    get upiInputField() { return $(`android=new UiSelector().className("android.widget.EditText")`); }
    get continueBtn() { return $(`//android.widget.Button[@text="Continue"]`); }
    get upiErrorMsg() { return $(`//android.widget.TextView[@text="Please enter a correct UPI ID"]`); }

}

module.exports = new BookYourAeraPage();

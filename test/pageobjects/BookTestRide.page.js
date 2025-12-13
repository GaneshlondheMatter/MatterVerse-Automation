const { $ } = require('@wdio/globals');
const Page = require('./page');

class BookTestRidePage extends Page {

    // --------------------------------------------
    // Book Test Ride Page Locators
    // --------------------------------------------
    get ExpPageHeader() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvMyMatterName"]`); }
    get TestRideText() { return $(`//android.widget.TextView[@text="Test ride the new AERA!"]`); }
    get TestRideSubText() { return $(`//android.widget.TextView[@text="Test ride the new AERA!"]`); }
    get Book_A_TestRideBtn() { return $(`//android.widget.Button[@resource-id="com.matter.companion.qa:id/btn_book_a_test_ride"]`); }
    get EnterYourLocInputFld() { return $(`//android.widget.EditText[@resource-id="com.matter.companion.qa:id/et_find_a_place"]`); }
    get locationsList() { return $$(`//androidx.recyclerview.widget.RecyclerView[@resource-id="com.matter.companion.qa:id/rv_locations"]//android.widget.TextView`); }

    get YourCurrentLoc() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_current_location"]`); }
    get YourLocCard() { return $(`//androidx.recyclerview.widget.RecyclerView[@resource-id="com.matter.companion.qa:id/rv_dealers"]/android.view.ViewGroup[1]`); }
    get ExpCenterCard() { return $(`//androidx.recyclerview.widget.RecyclerView[@resource-id="com.matter.companion.qa:id/rv_dealers"]/android.view.ViewGroup[2]`); }

    get YourLoctextAndLink() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_dealer_name" and @text="Your Location"]`); }
    get HTR_Text() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_dealer_address" and @text="Home Test Ride"]`); }
    get ExpLoc() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_dealer_name" and @text="Kharadi"]`); }
    get MatterExpHubText() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_dealer_address" and @text="Matter Experience Hub"]`); }

    get DateSelection() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_date" and @text="13"]`); }
    get DatesCard() { return $(`//androidx.recyclerview.widget.RecyclerView[@resource-id="com.matter.companion.qa:id/rv_dates"]/android.view.ViewGroup[1]`); }
    get BookTestRideButton() { return $(`//android.widget.Button[@resource-id="com.matter.companion.qa:id/btn_book_test_ride"]`); }
    
    getDateElement(daysToAdd = 1) {
    const today = new Date();
    today.setDate(today.getDate() + daysToAdd);

    const day = today.getDate().toString();  // Only the date number (1-31)

    // Dynamic xpath using the calculated date
    return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_date" and @text="${day}"]`);
}


    // --------------------------------------------
    // Booking Confirmation Page Locators
    // --------------------------------------------
    get success_HTR() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_booking_confirmed_success_htr_title"]`); }
    get Success_HTRSubText() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_booking_confirmed_success_htr_msg"]`); }
    get YourLocText() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_your_location"]`); }
    get YourLocCmplteAddress() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_your_location_address"]`); }
    get DateOfTestRide() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_date_value"]`); }
    get okayButton() { return $(`//android.widget.Button[@resource-id="com.matter.companion.qa:id/btn_okay"]`); }
    get CloseIcon() { return $(`//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/iv_booking_confirmed_success_htr_close"]`); }

}

export default new BookTestRidePage();

const { $ } = require('@wdio/globals');
const Page = require('./page');

class BookTestRidePage extends Page {

    // ----------------------------
    // Page Header / Intro
    // ----------------------------
    get ExpPageHeader() {
        return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvMyMatterName"]`);
    }

    get TestRideText() {
        return $(`//android.widget.TextView[@text="Test ride the new AERA!"]`);
    }

    get Book_A_TestRideBtn() {
        return $(`//android.widget.Button[@resource-id="com.matter.companion.qa:id/btn_book_a_test_ride"]`);
    }

    get enterYourLocInputField() { return $(`//android.widget.EditText[@resource-id="com.matter.companion.qa:id/et_find_a_place"]`); }

    get locationsList() { return $$(`//androidx.recyclerview.widget.RecyclerView[@resource-id="com.matter.companion.qa:id/rv_locations"]//android.widget.TextView`); }
    get YourLocCard() { return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_dealer_address" and @text="Home Test Ride"]`); }
    get ExpCenterCard() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_dealer_address" and @text="Matter Experience Hub"]');
    }

    // ----------------------------
    // Date Selection
    // ----------------------------
    get DatesCard() {
        return $(`//androidx.recyclerview.widget.RecyclerView[@resource-id="com.matter.companion.qa:id/rv_dates"]/android.view.ViewGroup[1]`);
    }

    async getDateElement(daysToAdd) {
        const today = new Date();
        today.setDate(today.getDate() + daysToAdd);

        const day = today.getDate().toString().padStart(2, "0"); // <-- adds leading zero

        const el = await $(
            `//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_date" and @text="${day}"]`
        );
        await el.waitForDisplayed({ timeout: 5000 });
        return el;
    }

    get BookTestRideButton() {
        return $(`//android.widget.Button[@resource-id="com.matter.companion.qa:id/btn_book_test_ride"]`);
    }

    // ----------------------------
    // Booking Confirmation
    // ----------------------------
    get success_ExperienceHubText() {
        return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_common_success_failed_title"]`);
    }

    get ExpeCenterdealerName() {
        return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_dealer_name"]`);
    }

    get DateOfTestRide() {
        return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_date_value"]`);
    }

    get VisitId() {
        return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_visit_ID"]`);
    }

    get PhoneNumber() {
        return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_phone"]`);
    }

    get okayButton() {
        return $(`//android.widget.Button[@resource-id="com.matter.companion.qa:id/btn_okay"]`);
    }

    get get_direction() {
        return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tv_get_direction"]`);
    }

    get Experience_Hub_Kharadi() {
        return $(`//android.widget.ImageView[@content-desc="View Street view imagery for MATTER | Experience Hub Kharadi - Pune"]`);
    }

}

module.exports = new BookTestRidePage();

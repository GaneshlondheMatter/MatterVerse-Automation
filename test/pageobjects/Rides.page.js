const { $ } = require('@wdio/globals');
const Page = require('./page');


class RidesPage extends Page {


    get RidesTab() {
        return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvRides"]`);
    }
    get RidesCount() {
        return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvRidesCount"]`);
    }
    get RidesSummeryText() {
        return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvRidesSummary"]`);
    }
    get RidesSummeryText() {
        return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvRidesSummary"]`);
    }
    get RidesData() {
        return $(`//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvRideData"]`);
    }

    get ShareSummery() {
        return $(`//android.widget.ImageView[@resource-id="com.matter.companion.qa:id/ivShareSummary"]`);
    }
    get ViewMore() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvViewMore"]')
    }
    get ViewMore() {
        return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvViewMore"]')
    }
    get RideSummeryDetails() {
        return $$(`//android.view.ViewGroup[@resource-id="com.matter.companion.qa:id/clRide"]`);
    }
}

module.exports = new RidesPage();

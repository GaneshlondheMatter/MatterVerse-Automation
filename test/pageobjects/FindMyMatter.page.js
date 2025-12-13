const { $ } = require('@wdio/globals');
const Page = require('./page');

class FindMyMatterPage {
get header() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvHeading']"); }
get navigateToVehicleBtn() { return $("//android.widget.TextView[@text='Navigate to Vehicle']"); }
get northDirection() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/tvNorthDirection']"); }
get recenterIcon() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/iv_recenter']"); }
get buzzMyVehicle() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvBuzzMyVehicleDisabled']"); }
get mapplsMap() { return $("//android.widget.FrameLayout[@content-desc='Showing a Map created with Mappls. Scroll by dragging two fingers. Zoom by pinching two fingers.']/android.widget.ImageView"); }
get navigateToVehicleCard() { return $("//android.view.ViewGroup[@resource-id='com.matter.companion.qa:id/findMyVehicleCard']"); }
get navigateCardHeader() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvCardHeading']"); }
get distance() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvDistance']"); }
get roadIcon() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/iv_road']"); }
get meterText() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvMeter']"); }
get crossIcon() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/crossIcon']"); }
get surfaceView() { return $("//android.view.SurfaceView"); }
get backArrowBtn() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivBack']"); }
get backToRecenterViewBtn() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/tv3DView']"); }
}

module.exports = { FindMyMatterPage };
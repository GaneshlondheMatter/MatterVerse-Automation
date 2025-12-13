const { $ } = require('@wdio/globals');
const Page = require('./page');

class ControlPage {
get bikeName() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvMyMatterName']"); }
get controlButton() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvControl']"); }
get imageDisplay() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivBike']"); }
get tapToLockButton() { return $("//android.widget.TextView[@text='Tap to lock']"); }
get locIcon() { return $("//android.widget.RelativeLayout[@resource-id='com.matter.companion.qa:id/swipeBtn']/android.widget.ImageView"); }
get findMyMatterBtn() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvfindMyMatter']"); }
get findARouteBtn() {
    return $('//android.widget.TextView[@resource-id="com.matter.companion.qa:id/tvFindARoute"]');
}

}

module.exports = { ControlPage };
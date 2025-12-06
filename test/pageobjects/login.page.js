const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    // ---------- LOCATORS ----------
    get matterLogo() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivLogo']"); }
    get welcomeText() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvHeadTitle']"); }
    get subText() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvTitle']"); }
    get nextArrowBtn() { return $("//android.widget.ImageView[@resource-id='com.matter.companion.qa:id/ivNext']"); }

    get enterPhoneText() { return $("//android.widget.TextView[@resource-id='com.matter.companion.qa:id/tvTitle']"); }
    get phoneNumberInput() { return $("//android.widget.EditText[@resource-id='com.matter.companion.qa:id/edtPhoneNumber']"); }
    get getOtpBtn() { return $("//android.widget.Button[@resource-id='com.matter.companion.qa:id/buttonGetOtp']"); }

    get otpInputFields() { return $$("//android.widget.EditText[contains(@resource-id,'otp_')]"); }   // otp_1, otp_2, otp_3, otp_4
    get loginBtn() { return $("//android.widget.Button[@resource-id='com.matter.companion.qa:id/buttonlogin']"); }

    // ---------- ACTION METHODS ----------

    async verifyLoginScreenDisplayed() {
        await expect(this.matterLogo).toBeDisplayed();
        await expect(this.welcomeText).toBeDisplayed();
        await expect(this.subText).toBeDisplayed();
        await expect(this.nextArrowBtn).toBeDisplayed();
    }

    async clickForwardArrow() {
        await this.nextArrowBtn.click();
    }

    async enterPhoneNumber(phone) {
        await expect(this.phoneNumberInput).toBeDisplayed();
        await this.phoneNumberInput.setValue(phone);
        await this.getOtpBtn.click();
    }

    async enterOTP(otp) {
        const digits = otp.split(""); // Convert "1234" -> ["1","2","3","4"]

        for (let i = 0; i < digits.length; i++) {
            await this.otpInputFields[i].setValue(digits[i]);
        }
    }

    async clickLogin() {
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();

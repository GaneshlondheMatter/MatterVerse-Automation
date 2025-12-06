const LoginPage = require('../test/pageobjects/login.page');
class LoginHelper {

    /**
     * Full login flow helper
     * @param {string} phoneNumber 
     * @param {string} otp 
     */
    async login(phoneNumber, otp) {

        // 1️⃣ Verify all initial UI elements
        await LoginPage.verifyLoginScreenDisplayed();

        // 2️⃣ Click Forward Arrow
        await LoginPage.clickForwardArrow();

        // 3️⃣ Enter Phone Number
        await LoginPage.enterPhoneNumber(phoneNumber);

        // 4️⃣ Enter OTP using loop inside POM
        await LoginPage.enterOTP(otp);

        // 5️⃣ Click Login Button
        await LoginPage.clickLogin();
    }
}

module.exports = new LoginHelper();

exports.config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: "Android",
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": "RZCXA02WYYH",
        "appium:platformVersion": "11",
        "appium:appPackage": "com.matter.companion.qa",
        "appium:appActivity": "com.matter.companion.view.onbording.OnBoardingActivity",
        "appium:noReset": true,
        "appium:autoGrantPermissions": true
    }],

    logLevel: 'info',

    hostname: '127.0.0.1',
    port: 4723,
    // path: '/wd/hub', // ✅ REQUIRED for Appium default installation
    path: '/',     // kept exactly as you had

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    // ✅ Screenshot on both passed and failed steps
    afterStep: async function (test, context, { error, passed }) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

        // Create folder if not exists
        const fs = require("fs");
        if (!fs.existsSync("./Screenshots")) {
            fs.mkdirSync("./Screenshots");
        }

        // FAILED step screenshot
        if (error) {
            await browser.saveScreenshot(`./Screenshots/FAILED_${timestamp}.png`);
        }

        // PASSED step screenshot
        if (passed) {
            await browser.saveScreenshot(`./Screenshots/PASSED_${timestamp}.png`);
        }
    },
};

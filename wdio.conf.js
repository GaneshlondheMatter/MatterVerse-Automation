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
    afterStep: async function (test, context, { error, result }) {
        const fs = require('fs');
        const dir = './Screenshots';

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        if (error) {
            // Screenshot for failed step
            await browser.saveScreenshot(`${dir}/FAILED_${timestamp}.png`);
        } else {
            // Screenshot for passed step
            await browser.saveScreenshot(`${dir}/PASSED_${timestamp}.png`);
        }
    }
};

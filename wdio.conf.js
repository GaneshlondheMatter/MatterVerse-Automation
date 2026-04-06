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
        "appium:platformVersion": "16",
        "appium:appPackage": "com.matter.companion.qa",
        "appium:appActivity": "com.matter.companion.view.onbording.OnBoardingActivity",
        "appium:appWaitActivity": "*",
        "appium:noReset": false,
        "appium:autoGrantPermissions": true,
        "appium:newCommandTimeout": 3000,
    }],

    logLevel: 'info',

    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    // ✅ GLOBAL WAIT FOR ALL TESTS
    before: function () {
        global.waitForElement = async function (selector, timeout = 25000) {
            const el = await $(selector);
            await el.waitForDisplayed({ timeout });
            return el;
        };
    },

    // ✅ Screenshot on both passed and failed steps
    afterStep: async function (test, context, { error, passed }) {
        const fs = require('fs');
        const path = require('path');

        const dir = path.resolve('./Screenshot');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const status = error ? "FAILED" : "PASSED";
        const filename = `${status}_${timestamp}.png`;
        const filepath = path.join(dir, filename);

        await browser.saveScreenshot(filepath);
        console.log(`📸 Screenshot saved: ${filepath}`);
    },

    // ✅ Add Allure Reporter
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
};

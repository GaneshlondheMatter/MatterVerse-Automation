const LoginHelper = require('../../Helper/login.helper');
const matterHomePage = require('../pageobjects/matterHome.page');
const assertionHelper = require('../../Helper/Assert.helper');  

describe('Login Flow Automation', () => {

    it('Should login successfully using valid phone number and OTP', async () => {

        await LoginHelper.login("8780981556", "8319");
        await matterHomePage.clickMatterHomeLogo();
        await matterHomePage.clickMyMatterTab();
        await matterHomePage.clickAccountTab();

    });

});

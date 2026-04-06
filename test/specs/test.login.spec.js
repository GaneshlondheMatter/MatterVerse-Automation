const LoginHelper = require('../../Helper/login.helper');
const assertionHelper = require('../../Helper/Assert.helper');  

describe('Login Flow Automation', () => {

    it('Should login successfully using valid phone number and OTP', async () => {

        await LoginHelper.loginIntoMatterVerse();        

    });

});

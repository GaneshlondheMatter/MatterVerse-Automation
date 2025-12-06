const LoginHelper = require('../../Helper/login.helper');
describe('Login Flow Automation', () => {

    it('Should login successfully using valid phone number and OTP', async () => {

        await LoginHelper.login("8780981556", "8319");

    });

});

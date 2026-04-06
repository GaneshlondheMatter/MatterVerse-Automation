const OrderHelper = require('../../Helper/CancelOrder.helper');

describe('Cancel Sales Order using API', () => {

  it('Cancel order and verify in mobile app', async () => {

    const response = await OrderHelper.cancelOrder({
      orderId: 'order_QAyZvXw7Gh1TbO',
      phone: '9990524225',
      employeeCode: 'EMP100BH24Z0000100',
      dealerCode: 'BH24Z0000100'
    });

    expect(response.status).toBe(200);

    // Continue mobile UI validation
    await driver.launchApp();
    await $('~Orders').click();
  });
});

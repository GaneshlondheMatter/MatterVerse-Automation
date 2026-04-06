const axios = require('axios');

class OrderHelper {

  async cancelOrder({ orderId, phone, employeeCode, dealerCode }) {
    const response = await axios.put(
      'https://orbitqa.matter.in/orbit-product/v1/product/cancel-sales-order',
      {
        orderId,
        phone,
        employeeCode,
        dealerCode
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '0da0b993dc67298572d0'
        }
      }
    );

    return response;
  }
}

module.exports = new OrderHelper();

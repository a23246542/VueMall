import Mock from 'mockjs';
import dashProducts from './data/dashProducts'
import dashOrders from './data/dashOrders';

const http = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}`;

// Mock.mock(`${http}/admin/ec/products`,'get',dashProducts);
Mock.mock(`${http}/admin/ec/orders`,'get',dashOrders);

    // ##https://github.com/nuysoft/Mock/wiki/Mock.mock()
    // @@為何不需要module.exports =
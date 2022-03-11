const { expect } = require('@jest/globals');
const Order = require('../models/Order');
const OrderService = require('./orders.service');

describe('Order service', () => { 
  const orderInput = {
    total: 10,
    status: "WAITING",
    items: [
      {
        product: {
          name: "Winger Combo BBQ",
          price: "Rp. 22.999",
          image: "https://i.ibb.co/RHJZ1Lj/carousel04.png",
        },
        quantity: 2
      },
    ],
    delivery: {
      address: {
        namaJalan: "Jl. Kumara Sari",
        nomorRumah: 16,
        kelurahan: "Jimbaran",
        kecamatan: "Kuta Selatan",
        kabupaten: "Badung",
        kodePos: 80361,
      },
      fullname: "Made Rianja",
      phone: "08113857878"
    }
  }
  
  test('Create should return input data with id', async () => {
    const orderServiceInstance = new OrderService();

    Order.create = jest.fn().mockResolvedValue({
      _id: '8403d655c19e51a2ea3c02c0',
      ...orderInput
    });

    const result = await orderServiceInstance.create(orderInput);

    expect(Order.create).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      _id: expect.any(String),
      ...orderInput,
    });
  });

  test('Get all should return empty array if no data is present at database', async () => { 
    const orderServiceInstance = new OrderService();

    Order.find = jest.fn().mockResolvedValue([]);

    const result = await orderServiceInstance.getAll();
    expect(Order.find).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
   });
 });
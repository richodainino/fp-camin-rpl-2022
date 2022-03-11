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
  
  const orderUpdate = {
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
      fullname: "Richo Dainino",
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

  test('Get order by id should return empty array if no data is present at database', async () => { 
    const orderServiceInstance = new OrderService();

    Order.findById = jest.fn().mockResolvedValue([]);

    const result = await orderServiceInstance.getById('622b3f962bb17dfdbecde546');
    expect(Order.findById).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });

  test('Update should return the updated data', async () => { 
    const orderServiceInstance = new OrderService();

    Order.findOneAndUpdate = jest.fn().mockResolvedValue({
      _id: '622b3f962bb17dfdbecde546',
      ...orderUpdate
    });

    const result = await orderServiceInstance.updateById('622b3f962bb17dfdbecde546');

    expect(Order.findOneAndUpdate).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      _id: expect.any(String),
      ...orderUpdate,
    });
  });

  test('Delete should return empty array if no data is present at database', async () => { 
    const orderServiceInstance = new OrderService();

    Order.findOneAndDelete = jest.fn().mockResolvedValue([]);

    const result = await orderServiceInstance.deleteById();
    expect(Order.findOneAndDelete).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });
 });
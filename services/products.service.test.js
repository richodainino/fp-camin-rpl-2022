const { expect } = require('@jest/globals');
const Product = require('../models/Product');
const ProductService = require('./products.service');

describe('Product service', () => { 
  const productInput = {
    name: "Winger Combo BBQ",
    price: "Rp. 22.999",
    image: "https://i.ibb.co/RHJZ1Lj/carousel04.png"
  }
  
  const productUpdate = {
    name: "Winger Combo BBQ",
    price: "Rp. 24.999",
    image: "https://i.ibb.co/RHJZ1Lj/carousel04.png"
  }
  
  test('Create should return input data with id', async () => {
    const productServiceInstance = new ProductService();

    Product.create = jest.fn().mockResolvedValue({
      _id: '622b3f962bb17dfdbecde546',
      ...productInput
    });

    const result = await productServiceInstance.create(productInput);

    expect(Product.create).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      _id: expect.any(String),
      ...productInput,
    });
  });

  test('Get all should return empty array if no data is present at database', async () => { 
    const productServiceInstance = new ProductService();

    Product.find = jest.fn().mockResolvedValue([]);

    const result = await productServiceInstance.getAll();
    expect(Product.find).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });

  test('Get product by id should return empty array if no data is present at database', async () => { 
    const productServiceInstance = new ProductService();

    Product.findById = jest.fn().mockResolvedValue([]);

    const result = await productServiceInstance.getById('622b3f962bb17dfdbecde546');
    expect(Product.findById).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });

  test('Update should return the updated data', async () => { 
    const productServiceInstance = new ProductService();

    Product.findByIdAndUpdate = jest.fn().mockResolvedValue({
      _id: '622b3f962bb17dfdbecde546',
      ...productUpdate
    });

    const result = await productServiceInstance.updateById('622b3f962bb17dfdbecde546');

    expect(Product.findByIdAndUpdate).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      _id: expect.any(String),
      ...productUpdate,
    });
  });

  test('Delete should return empty array if no data is present at database', async () => { 
    const productServiceInstance = new ProductService();

    Product.findByIdAndDelete = jest.fn().mockResolvedValue([]);

    const result = await productServiceInstance.deleteById();
    expect(Product.findByIdAndDelete).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });
 });

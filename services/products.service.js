const Product = require('../models/Product');

class ProductService {
  constructor() {
    this.productModel = Product;
  }

  async getAll() {
    const products = await this.productModel.find();
    return products;
  }

  async getById(id) {
    const product = await this.productModel.findById(id);
    return product;
  }

  async create(data) {
    const product = await this.productModel.create(data);
    return product;
  }

  async deleteById(id) {
    const product = await this.productModel.findOneAndDelete({ _id: id });
    return product;
  }

  async updateById(id, data) {
    const product = await this.productModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
      runValidators: true,
    });
    return product;
  }
}

module.exports = ProductService;

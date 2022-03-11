const Order = require('../models/Order');

class OrderService {
  constructor() {
    this.orderModel = Order;
  }

  async getAll() {
    const orders = await this.orderModel.find();
    return orders;
  }

  async getById(id) {
    const order = await this.orderModel.findById(id);
    return order;
  }

  async create(data) {
    const order = await this.orderModel.create(data);
    return order;
  }

  async deleteById(id) {
    const order = await this.orderModel.findOneAndDelete({ _id: id });
    return order;
  }

  async updateById(id, data) {
    const order = await this.orderModel.findOneAndUpdate({ _id: id }, data, {
      new: true
    });
    return order;
  }
}

module.exports = OrderService;
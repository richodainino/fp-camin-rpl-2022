const OrderService = require('../services/orders.service');

const getAllOrders = async (req, res) => {
  try {
    const orderServiceInstance = new OrderService();

    const orders = await orderServiceInstance.getAll();
    res.status(200).json({
      success: true,
      data: {
        orders: orders,
        amount: orders.length,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }  
};

const getOrderById = async (req, res) => {
  try {
    const orderServiceInstance = new OrderService();
    const { id } = req.params;

    const order = await orderServiceInstance.getById(id);
    
    if (!order) {
      return res.status(404).json({ msg: `No order with id: ${id}` });
    }
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ msg: error }); // untuk handle jika id nya tidak valid
  }
};

const createOrder = async (req, res) => {
  try {
    const orderServiceInstance = new OrderService();
    const order = await orderServiceInstance.create(req.body);
    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ msg: error });
  }  
};  

const deleteOrder = async (req, res) => {
  try {
    const orderServiceInstance = new OrderService();
    const { id } = req.params;
    
    const order = await orderServiceInstance.deleteById(id);
    if (!order) {
      return res.status(404).json({ msg: `No order with id: ${id}` });
    }
    res.status(200).json({ order: null, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

/* metode patch */
const updateOrder = async (req, res) => {
  try {
    const orderServiceInstance = new OrderService();
    const { id } = req.params;
    
    const order = await orderServiceInstance.updateById(id, req.body);
    if (!order) {
      return res.status(404).json({ msg: `No order with id: ${id}` });
    }
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder };
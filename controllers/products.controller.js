const ProductService = require('../services/products.service');

const createProduct = async (req, res) => {
    try {
        const productServiceInstance = new ProductService();
        const newProduct = await productServiceInstance.create(req.body);
        res.status(201).json({
            status: "success",
            data: { newProduct }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        });
    }
};

const getProducts = async (req, res) => {
    try {
        const productServiceInstance = new ProductService();
        const products = await productServiceInstance.getAll();
        res.status(200).json({
            status: "success",
            data: {
                products,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

const getProduct = async (req, res) => {
    try {
        const productServiceInstance = new ProductService();
        const product = await productServiceInstance.getById(req.params.id);
        if (!product) {
            return res.status(404).json({
                status: "fail",
                message: "Product not found",
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                product,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const productServiceInstance = new ProductService();
        const product = await productServiceInstance.updateById(req.params.id, req.body);

        if (!product) {
            return res.status(404).json({
                status: "fail",
                message: "Product not found",
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                product,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const productServiceInstance = new ProductService();
        const product = await productServiceInstance.deleteById(req.params.id);
        if (!product) {
            return res.status(404).json({
                status: "fail",
                message: "Product not found",
            });
        }
        res.status(200).json({
            status: "success",
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};

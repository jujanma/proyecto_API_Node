const debug = require("debug")("app: module-products-controller");

const { ProductsService } = require("./services");

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    try {
      let products = await ProductsService.getAll();
      res.json({ products });
    } catch (error) {
      debug(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getProduct: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let product = await ProductsService.getById(id);
      res.json(product);
    } catch (error) {
      debug(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  createProduct: async (req, res) => {
    try {
      const { body } = req;
      let insertedId = await ProductsService.create(body);
      res.json(insertedId);
    } catch (error) {
      debug(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

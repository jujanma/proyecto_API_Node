const expres = require("express");
const router = expres.Router();
const { ProductsController } = require("./controller");

module.exports.ProductosAPI = (app) => {
  router
    .get("/", ProductsController.getProducts)
    .get("/report", ProductsController.generateReport)
    .get("/:id", ProductsController.getProduct)
    .post("/", ProductsController.createProduct);

  app.use("/api/products", router);
};

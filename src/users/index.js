const expres = require("express");
const router = expres.Router();
const { UsersController } = require("./controller");

module.exports.UsersAPI = (app) => {
  router
    .get("/", UsersController.getUsers)
    .get("/:id", UsersController.getUser)
    .post("/", UsersController.createUser);

  app.use("/api/users", router);
};

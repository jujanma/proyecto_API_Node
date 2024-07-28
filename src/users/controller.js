const debug = require("debug")("app: module-users-controller");
const createError = require("http-errors");

const { UsersService } = require("./services");
const { Response } = require("../common/response");

module.exports.UsersController = {
  getUsers: async (req, res) => {
    try {
      let users = await UsersService.getAll();
      Response.success(res, 200, "Lista de usuarios", users);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  getUser: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let user = await UsersService.getById(id);
      if (!user) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `Usuario ${id}`, user);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  createUser: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        let insertedId = await UsersService.create(body);
        Response.success(res, 201, "Usuario agregado", insertedId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  //update
  //   updateProduct: async (req, res) => {
  //     try {
  //       const {
  //         body,
  //         params: { id },
  //       } = req;
  //       let modifiedCount = await UsersService.update(id, body);
  //       if (!modifiedCount) {
  //         Response.error(res, new createError.NotFound());
  //       } else {
  //         Response.success(res, 200, `Usuario ${id} actualizado`, modifiedCount);
  //       }
  //     } catch (error) {
  //       debug(error);
  //       Response.error(res);
  //     }
  //   },
  //   //delete
  //   deleteProduct: async (req, res) => {
  //     try {
  //       const { id } = req.params;
  //       let deletedCount = await UsersService.delete(id);
  //       if (!deletedCount) {
  //         Response.error(res, new createError.NotFound());
  //       } else {
  //         Response.success(res, 200, `Producto ${id} eliminado`, deletedCount);
  //       }
  //     } catch (error) {
  //       debug(error);
  //       Response.error(res);
  //     }
  //   },
};

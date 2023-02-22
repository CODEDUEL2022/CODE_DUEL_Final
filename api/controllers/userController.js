"use strict";

const db = require("../models/index");

module.exports = {
  read: async (req, res, next) => {
    try {
      const result = await db.Task.findAll();
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const result = await db.Task.create({
        name: req.body.name,
        done: false,
      });
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const result = await db.Task.update(
        {
          name: req.body.name,
          done: req.body.done,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const result = await db.Task.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({
        result: result,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  searchUser: async (req, res, next) => {
    try {
      const user_name = req.body.user.name;
      const user_password = req.body.user.password;

      const is_success = await db.Task.find({
        where: {
          name: user_name,
          password: user_password,
        },
      });
      //おそらく、is_successには、プレイヤーの情報全てが入ったリストが帰ってくる。
      //それから不要な情報を削ぎ落して、フロントエンドに送信すればOK
      const result = [is_success, user_id, user_level];
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const user_name = req.body.user.name;
      const user_password = req.body.user.password;

      const result = await db.Task.create({
        name: user_name,
        password: user_password,
      });

      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getUserInfo: async (req, res, next) => {
    try {
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

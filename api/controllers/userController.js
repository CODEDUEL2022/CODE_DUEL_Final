"use strict";

const { UUID } = require("sequelize");
const db = require("../models/index");

module.exports = {
  read: async (req, res) => {
    try {
      const result = await db.Task.findAll();
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  create: async (req, res) => {
    try {
      const result = await db.User.create({
        name: req.body.name,
      });
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  update: async (req, res) => {
    try {
      const result = await db.User.update(
        {
          name: req.body.name,
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
  delete: async (req, res) => {
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
  login: async (req, res) => {
    try {
      //COMMENT: 初期化
      const user_name = req.cookies.name;
      const user_id = req.cookies.id;
      let user_primary_id = 0;
      let user_level = 0;
      let user_exp = 0;

      await db.User.findOne({
        where: {
          name: user_name
        },
      }).then((user) => {
        user_primary_id = user.id;
      });
      await db.Level.findOne({
        where: {
          UserId: user_primary_id,
        },
      }).then((user) => {
        user_level = user.level;
        user_exp = user.exp;
      });

      const result = [user_primary_id, user_name, user_level, user_exp];
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createUser: async (req, res) => {
    try {
      //COMMENT: 初期化
      const user_id = req.cookies.id;
      const user_name = req.cookies.name;
      let count = 0;
      let user_level = 0;
      let user_exp = 0;
      let user_primary_id = 0;

      await db.User.count({
        where: {
          uuid: user_id,
        },
      }).then((dataCount) => {
        console.log("dataCount: ",dataCount)
        count = dataCount;
      });

      if (count > 0) {
        console.log("既にユーザー作成済み");
        res.send("already exists");
      } else {
        await db.User.create({
          name: user_name,
          uuid: user_id,
        });
        await db.User.findOne({
          where: {
            name: user_name,
          },
        }).then((user) => {
          user_primary_id = user.id;
        });
        await db.Level.create({
          UserId: user_primary_id,
          level: 0,
          exp: 0
        })

        const result = [user_id, user_name, user_level, user_exp]
        res.send(result);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getUserInfo: async (req, res) => {
    try {
      //COMMENT: 初期化
      const user_id = req.cookies.id;
      let user_primary_id = 0;
      let user_exp = 0;
      let user_level = 0;

      await db.User.findOne({
        where: {
          uuid: user_id
        },
      }).then((user) => {
        user_primary_id = user.id;
      });
      await db.Level.findOne({
        where: {
          UserId: user_primary_id,
        },
      }).then((user) => {
        user_exp = user.exp;
        user_level = user.level;
      });

      const result = [user_id, [user_exp, user_level]];
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await db.User.findOne({
        where: {
          name: user_name,
        },
      }).then((user) => {
        user.destroy();
        const is_success = true;
        const result = [is_success];
        res.send(result);
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  findUser: async (id) => {
    try {
      const id = id;
      const user = await db.User.findOne({
        where: {
          id: id,
        },
      });
      console.log(user);
      return user;
    } catch (err) {
      res.status(500).send(err);
    }
  },
  /*COMMENT: 使えそうな技術があったのでコメントアウトにて残しておく
    const rows = await db.Task.findAll();
    rows.forEach(row => {
        const id = row.id
        const name = row.name
        console.log(`${id}: ${name}`)
    })
  */
};

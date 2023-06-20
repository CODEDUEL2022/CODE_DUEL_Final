"use strict";

const db = require("../models/index");

module.exports = {
    read: async(req, res) => {
        try{
            const result = await db.Task.findAll();
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
    create: async(req, res) => {
        try{
            const result = await db.Task.create({
                name: req.body.name,
                done: false
            });
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
    update: async(req, res) => {
        try{
            const result = await db.Task.update(
                {
                    name: req.body.name,
                    done: req.body.done
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            );
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
    delete: async(req, res) => {
        try{
            const result = await db.Task.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.send({
                result: result
            });
        }catch(err){
            res.status(500).send(err);
        }
    },
    sendResult: async(req, res) => {
        try{
            //COMMENT: 初期化
            const user_id = req.cookies.id;
            const is_win = req.body.result;//COMMENT: 勝利で1, 敗北で0
            let exp = 0;
            let user_primary_id = 0;
            console.log(is_win)
            await db.User.findOne({
                where: {
                  uuid: user_id,
                },
            }).then((user) => {
                user_primary_id = user.id;
            });
            await db.Level.findOne({
                where:{
                    UserId: user_primary_id
                }
            }).then((user) => {
                exp = user.exp;
            })
            exp += 10 + is_win*10 //ここで経験値量の評価を行う。
            //TODO: Levelの評価。○○○○ expたまったらレベルを上げる、っていう処理
            await db.Level.update(
                { exp: exp },
                { where:{ id: user_primary_id }}
            )
            const result = [user_id, exp]
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
}
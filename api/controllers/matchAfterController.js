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
            const user_id = req.body.user_id;
            const is_win = req.body.result;
            let exp = 0;
            await db.Task.findOne({where:{user_id: user_id}}).then(user => {
                exp = user.exp;
            })
            exp += 10 + is_win*10
            await db.Task.update(
                {exp: exp},
                {where:{id: user_id}})
            const result = [user_id, exp]
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
}
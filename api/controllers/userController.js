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
    Login: async(req, res) => {
        try{
            const user_name = req.body.user.name;
            const user_password = req.body.user.password;
            const is_success = await db.Task.findOne({
                where: {
                    name: user_name,
                }
            }).then(user => {
                const user_id = user.id;
                const user_level = user.level;
                const result = [is_success, user_id,user_level]
                res.send(result);
            });
        }catch(err){
            res.status(500).send(err);
        }
    },
    createUser: async(req, res) => {
        try{
            const user_name = req.body.user.name;
            const user_password = req.body.user.password;

            const result = await db.Task.create({
                name: user_name,
                password: user_password
            });
            
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
    getUserInfo: async(req, res) => {
        try{
            const user_name = req.body.user.name;
            const user_password = req.body.user.password;
            const is_success = await db.Task.findOne({
                where: {
                    name: user_name,
                }
            }).then(user => {
                const user_id = user.id;
                const user_level = user.level;
                const result = [user_id,user_level]
                res.send(result);
            });
            
        }catch(err){
            res.status(500).send(err);
        }
    },
    deleteUser: async(req, res) => {
        try{
            await db.Task.findOne({
                where: {
                    name: user_name,
                }
            }).then(user => {
                user.destroy();
                const is_success = true;
                const result = [is_success];
                res.send(result);
            });

        }catch(err){
            res.status(500).send(err);
        }
    },
    testUserCreate: async(req, res) => {
        try{
            const user_name = "user";
            const user_password = "password";

            const result = await db.Task.create({
                name: user_name,
                password: user_password
            });
            
            res.send(result);
            const is_success = await db.Task.findOne({
                where: {
                    name: user_name,
                }
            }).then(user => {console.log(user.id)});

        }catch(err){
            res.status(500).send(err);
        }
        // const rows = await db.Task.findAll();
        // rows.forEach(row => {
        //     const id = row.id
        //     const name = row.name
        //     console.log(`${id}: ${name}`)
        //  })
    },
}
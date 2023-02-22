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
    customMatch: async(req, res) => {
        try{
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
    randomMatch: async(req, res) => {
        try{
            // const user_id = req.body.user_id;
            const user_id = "test_user";
            let waiting_people = 0;          
            await db.Task.count().then(dataCount => {
                db.Task.create({
                    id: user_id,
                    count: dataCount
                })
                waiting_people = dataCount;
                console.log(dataCount) 
            })
            if(waiting_people > 2){
                db.Task.findOne({where:{id:[0,1]}}).then(users => {
                    console.log(users)
                    db.Task.destroy({where:{id:[0,1]}})
                    res.send(users);
                })
            }
        }catch(err){
            res.status(500).send(err);
        }
    },
    deleteRoom: async(req, res) => {
        try{
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
    leaveUser: async(req, res) => {
        try{
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },

    
}
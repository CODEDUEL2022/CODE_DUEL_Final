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
    sendAttackInfo: async(req, res) => {
        try{
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
    drawCard: async(req, res) => {
        try{
            let card_info;
            const number_of_cards = req.body.card;
            console.log(number_of_cards);
            const result = [];
            for(let i = number_of_cards; i <= 5; i++){
                //TODO: カード情報をDBからランダムに取得
                //COMMENT: idが1~57番まで存在
                const rand_card_id = Math.floor(Math.random() * 57) + 1;
                await db.Card.findOne({
                    where: {
                      id: rand_card_id,
                    },
                }).then((card) => {
                    card_info = {
                        id: card.id, 
                        name: card.name, 
                        value: card.value, 
                        action_type: card.type,    
                        cost: card.cost, 
                        enforce_os_id: card.osId, 
                        img_src: card.filePath,
                        is_selected: false
                    };
                    result.push(card_info);
                });
            }
            //TODO: 引いたカード情報をresultに格納
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
}
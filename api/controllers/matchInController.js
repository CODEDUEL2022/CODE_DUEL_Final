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
            const result = [];
            for(let i = number_of_cards; i <= 5; i++){
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
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
    sendComboData: async(req, res) => {
        try{
            // TODO: 変数名の命名に困ったけど時間なかったからこれで実装。余裕ある人正しいのに変えてほしい
            const cards_id = req.body.cards_id;
            const card_combo_list = [];
            const combo_name_list = [];
            const card_combo_id_list = [];
            const result = [];
            await db.CardCombo.findAll({
                where: {
                    CardId: cards_id,
                },
            }).then((card) => {
                card_combo_list.push(card)
            });
            const combo_id_list = card_combo_list[0].map(item => item.ComboId); //idのみのリストを取得
            
            for(let i = 0; i < combo_id_list.length; i++) {
                await db.CardCombo.findAll({
                    where:{
                        ComboId: combo_id_list[i]
                    },
                }).then((item)=>{
                    card_combo_id_list.push(item.map(item => item.CardId)) //所持しているカードが関係するコンボのidを取得
                })
            }

            for(let i = 0; i < combo_id_list.length; i++) {
                await db.Combo.findOne({
                    where:{
                        id: combo_id_list[i]
                    },
                }).then((item) => {
                    combo_name_list.push(item.name) //コンボ名を取得
                })
            }

            for(let i = 0; i < combo_name_list.length; i++){
                let combo_info = {
                    name: combo_name_list[i],
                    id: card_combo_id_list[i]
                }
                result.push(combo_info) //フロント側の要請に合うようなobjectを生成
            }

            res.send(result);
        }catch(err){
            res.sendStatus(500).send(err);
        }
    },
}
    const transactionModel = require('../models/transactionModel')
    const accountModel = require("../models/accountModel");
    const jwt = require('jsonwebtoken');
    const JWT_KEY = process.env.JWT_KEY;

    module.exports.doTransaction = async function doTransaction(req, res) {
        try {
            const data = req.body;
            console.log(data);
            if(data && data.receiver.receiver_upi){
            const receiverAccountData = await accountModel.findOne({upi: data.receiver.receiver_upi});
            const senderAccoundData = await accountModel.findOne({upi: data.sender.sender_upi});

            if(receiverAccountData && senderAccoundData){
                const transaction = await transactionModel.create(data);

                const updateBalance = receiverAccountData.balance + data.amount;
                const updateBalancee = senderAccoundData.balance - data.amount;
                await accountModel.updateOne({ _id: receiverAccountData._id}, {balance: updateBalance});
                await accountModel.updateOne({ _id: senderAccoundData._id}, {balance: updateBalancee});

                return res.json({
                    msg: "Transaction Successfull",
                    data: transaction
                });
            }else
            {
                return res.json({
                    msg: "Reciever account Not Found"
                });
            }
            }
            else{
                return res.json({
                    msg:"Receiver Upi Not Provided"
                });
            }
        } catch (error) {
            return res.json({
                error:error.message
            })
        }
    }
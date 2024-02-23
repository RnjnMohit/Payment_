const transactionModel = require('../models/transactionModel');
const accountModel = require("../models/accountModel");
const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;

module.exports.doTransaction = async function doTransaction(req, res) {
    try {
        const data = req.body;
        console.log(data);
        if (data && data.receiver.receiver_upi) {
            const receiverAccountData = await accountModel.findOne({ upi: data.receiver.receiver_upi });
            const senderAccoundData = await accountModel.findOne({ upi: data.sender.sender_upi });

            if (receiverAccountData && senderAccoundData) {
                const transaction = await transactionModel.create(data);

                const updateBalance = receiverAccountData.balance + parseFloat(data.amount);
                const updateBalancee = senderAccoundData.balance - data.amount;
                await accountModel.updateOne({ _id: receiverAccountData._id }, { balance: updateBalance });
                await accountModel.updateOne({ _id: senderAccoundData._id }, { balance: updateBalancee });

                return res.status(200).json({
                    msg: "Transaction Successful",
                    data: transaction
                });
            } else {
                return res.status(404).json({
                    msg: "Receiver account Not Found"
                });
            }
        } else {
            return res.status(400).json({
                msg: "Receiver UPI Not Provided"
            });
        }
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

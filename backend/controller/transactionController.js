const transactionModel = require('../models/transactionModel')
const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;

module.exports.doTransaction = async function doTransaction(req, res) {
    try {
        data = req.body;
        if(data){
            const transaction = await transactionModel.create(data);
            res.json({
                msg:"account created successfully",
                data:transaction
            })
        }
        else{
            res.json({
                msg:"not enough data"
            })
        }
    } catch (error) {
        return res.json({
            error:error
        })
    }
}
const accountModel = require('../models/accountModel');
const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;

module.exports.updateAccount = async function updateAccount(req, res) {
    try {

        let payload = jwt.verify(req.headers.authorization && req.headers.authorization.split(' ')[1], JWT_KEY);
        let uid = payload.payload;
        let account = await accountModel.findOne({user:uid});
        let updateData = req.body;
        console.log({msg:"yes",account});
        if (account) {
            for (let key in updateData) {
                account[key] = updateData[key];
            }
            account.save();
            res.json({ msg: "account updated", account })
        }
        else {
            account = await accountModel.create({ user: uid, upi: updateData.upi, acNumber: updateData.acNumber });
            res.json({ msg: "account created", account: account });

        }
    } catch (error) {
        res.json(error)
    }
}


module.exports.getAccount = async function getAccount(req,res){
    try {
        let uid = jwt.verify((req.headers.authorization && req.headers.authorization.split(' ')[1]),JWT_KEY).payload;
        let account = await accountModel.findOne({user:uid});
        if(account){
            res.json(account);
        }
        else{
            res.status(404).json({msg:"user not found"});
        }
    } catch (error) {
        res.json(error);
    }   
}
const accountModel = require('../models/accountModel');
const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;

module.exports.updateAccount = async function updateAccount(req, res) {
    try {

        let payload = jwt.verify(req.cookies.login, JWT_KEY);
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
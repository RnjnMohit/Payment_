const mongoose = require('mongoose');

const db_link = process.env.DB_LINK;

mongoose.connect(db_link)
    .then(function () {
        console.log('transaction db connected');
    })
    .catch(function (err) {
        console.log(err);
    })

const transactionSchema = mongoose.Schema({
    sender:{
        type:mongoose.Schema.ObjectId,
        ref:'userModel',
        required:true
    },
    receiver:{
        type:mongoose.Schema.ObjectId,
        ref:'userModel',
        required:true
    },
    amount:{
        type:Number,
        min:[1,'MinLimit']
    }
});



transactionModel = mongoose.model('transactionModel', transactionSchema);
module.exports = transactionModel;
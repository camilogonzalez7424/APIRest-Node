const db = require('../db/DBConnection');

const getAll = (onresult)=>{
    db.con.query("SELECT * FROM ordersA00370263", (err,result)=>{
        if(!err){
            onresult(result);
        }
    });
}

const addOrders = (order, onresult)=>{
    db.con.query("INSERT INTO ordersA00370263(userId) VALUES ('"+order.userId+"')", (err)=>{
        if(!err){
            onresult({result:"OK"});
        }else{
            onresult({result:"ERROR"});
        }
    });
}

module.exports.getAll = getAll;
module.exports.addOrders = addOrders;
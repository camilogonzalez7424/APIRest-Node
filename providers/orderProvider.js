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


//__________________________________________________________________________________________________________

const addProductsToOrder = (orderP, onresult)=>{
    db.con.query("INSERT INTO ordersProductsA00370263(orderId,productId,amount) VALUES ('"+orderP.orderId+"','"+orderP.productId+"','"+orderP.amount+"')", (err)=>{
        if(!err){
            onresult({result:"OK"});
        }else{
            onresult({result:"ERROR"});
        }
    });
}


const updateOrder = (order, onresult)=>{
    db.con.query("UPDATE ordersA00370263 SET paid = 1 , payDate = CURRENT_TIMESTAMP WHERE id = ('"+order+"')",(err)=>{
        if(!err){
            onresult({result:"OK"});
        }else{
            onresult({result:"ERROR"});
        } 
    });
}


module.exports.getAll = getAll;
module.exports.addOrders = addOrders;
module.exports.addProductsToOrder = addProductsToOrder; 
module.exports.updateOrder = updateOrder;
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



const orderInformation = (id, onresult)=>{
    db.con.query("SELECT productsA00370263.id, productsA00370263.name, productsA00370263.price, ordersA00370263.id, ordersProductsA00370263.amount FROM (productsA00370263 INNER JOIN ordersProductsA00370263 "+" ON productsA00370263.id=ordersProductsA00370263.productId)INNER JOIN ordersA00370263 ON ordersProductsA00370263.orderId = ordersA00370263.id WHERE ordersA00370263.id = ('"+id+"')",(err,result)=>{
        if(!err){
            onresult(result);
        }
    });

   
}


const deleteProduct = (info,onresult)=>{

    db.con.query("SELECT amount FROM ordersProductsA00370263 WHERE orderId = ('"+info.orderId+"') AND productId = ('"+info.amount+"')"  , function(err,resul){
      
        if(!err){
          //  console.log(resul[0].amount);
        //  const myJSON = JSON.stringify(resul);
            var myJSON = resul[0].amount;

           let amountNew = myJSON-info.amount;
        db.con.query("UPDATE ordersProductsA00370263 SET amount = ('"+amountNew+"') WHERE orderId = ('"+info.orderId+"') AND productId = ('"+info.productId+"')" , (err,result)=>{
            if(!err){
                onresult({result:"OK"});
            }else{
                onresult({result:"ERROR"});
            } 
        });
    }

    });



/*
    db.con.query("UPDATE ordersProductsA00370263 SET amount = ('"+amount-info.amount+"') WHERE orderId = ('"+info.orderId+"') AND productId = ('"+info.productId+"')",(err)=>{
        if(!err){
            onresult({result:"OK"});
        }else{
            onresult({result:"ERROR"});
        } 
    });*/
}

module.exports.getAll = getAll;
module.exports.addOrders = addOrders;
module.exports.addProductsToOrder = addProductsToOrder; 
module.exports.updateOrder = updateOrder;
module.exports.orderInformation = orderInformation;
module.exports.deleteProduct = deleteProduct;